/**
 * study-session.service
 * get-native.com
 *
 * Created by henryehly on 2017/04/30.
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { kListening, kShadowing, kSpeaking, kWriting } from './section-keys';
import { kCurrentStudySession } from '../local-storage/local-storage-keys';
import { NavbarService } from '../navbar/navbar.service';
import { StudySession } from '../entities/study-session';
import { SessionTimer } from './session-timer';
import { HttpService } from '../http/http.service';
import { APIHandle } from '../http/api-handle';
import { Logger } from '../logger/logger';
import { Video } from '../entities/video';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

type StudySessionSection = 'listening' | 'shadowing' | 'speaking' | 'writing';

@Injectable()
export class StudySessionService {
    get timer(): Observable<number> {
        if (!this._timer && _.has(this.current, 'session.study_time')) {
            this._timer = new SessionTimer(this.current.session.study_time);
        }

        return this._timer;
    }

    set current(value: any) {
        if (!_.isPlainObject(value)) {
            return;
        }

        this._current = value;
        this.localStorage.setItem(kCurrentStudySession, value);
    }

    get current() {
        if (!this._current && this.localStorage.hasItem(kCurrentStudySession)) {
            return this.localStorage.getItem(kCurrentStudySession);
        }

        return this._current;
    }

    progress: any = {
        countdown$: this.navbar.studyProgress.countdown$,
        listening$: this.navbar.studyProgress.listening$,
        shadowing$: this.navbar.studyProgress.shadowing$,
         speaking$: this.navbar.studyProgress.speaking$,
          writing$: this.navbar.studyProgress.writing$
    };

    private _timer: Observable<number> = null;
    private _current: { session?: StudySession, video?: Video } = null;

    constructor(private http: HttpService, private localStorage: LocalStorageService, private logger: Logger, private router: Router,
                private navbar: NavbarService) {
    }

    create(options: StudySession): Observable<any> {
        return this.http.request(APIHandle.START_STUDY_SESSION, {body: options}).do(this.onStartStudySession.bind(this));
    }

    transition(section: StudySessionSection) {
        this.updateCurrent({
            section: section
        });

        this.router.navigate(['/study']).then(() => {
            this.logger.debug(this, 'navigated to /study');
        });
    }

    updateCurrent(value: any): void {
        if (!_.isPlainObject(value)) {
            return;
        }

        let current = this.current;
        _.assign(current, value);
        this.current = current;
    }

    private onStartStudySession(studySession: StudySession) {
        const session: any = {};

        session.session = studySession;
        this.current = session;

        this._timer = new SessionTimer(session.session.study_time);
    }
}
