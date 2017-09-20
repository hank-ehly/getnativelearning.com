import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';

@Injectable()
export class NotificationService {

    permission$ = new BehaviorSubject<NotificationPermission>(this.supported ? (<any>Notification).permission : 'denied');

    get supported(): boolean {
        return 'Notification' in window;
    }

    constructor() {
    }

    requestPermission(): Observable<NotificationPermission> {
        if (!this.supported) {
            return Observable.of(<NotificationPermission>'denied');
        }

        return Observable.create(function(observer) {
            Notification.requestPermission().then(function(permission) {
                observer.next(permission);
                observer.complete();
            });
        });
    }

}
