/**
 * video-panel-list.component
 * getnative.org
 *
 * Created by henryehly on 2017/01/12.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

import { StudySession } from '../../core/entities/study-session';
import { Logger } from '../../core/logger/logger';
import { Video } from '../../core/entities/video';

import * as _ from 'lodash';

@Component({
    selector: 'gn-video-panel-list',
    templateUrl: 'video-panel-list.component.html',
    styleUrls: ['video-panel-list.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({opacity: 0}),
                animate('200ms ease-in-out', style({opacity: 1}))
            ])
        ])
    ]
})
export class VideoPanelListComponent {

    get videos(): Video[] {
        return this._videos;
    }

    @Input() set videos(videos: Video[]) {
        if (_.isEmpty(videos)) {
            this._videos = [];
            return;
        }

        const numberOfVideos = videos.length;

        if (numberOfVideos % 3 === 0) {
            this._videos = videos;
            return;
        }

        const unfilled = 3 - (numberOfVideos % 3);
        this._videos = _.concat(videos, _.times(unfilled, _.constant({})));
    }

    @Input() navigates = false;
    @Input() controls = false;
    @Input() disabled = false;

    @Output() begin = new EventEmitter<StudySession>();

    private _videos: Video[];

    constructor(private logger: Logger, private router: Router) {
    }

    async onClickOverlay(video: Video) {
        if (!this.navigates) {
            return;
        }

        this.logger.debug(this, `onClickOverlay(${video.id})`);
        await this.router.navigate(['library', video.id]);
    }

    onBegin(studySession: StudySession) {
        this.begin.emit(studySession);
    }

}
