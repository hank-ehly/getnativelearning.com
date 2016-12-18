/**
 * time-format.service
 * get-native.com
 *
 * Created by henryehly on 2016/12/16.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class TimeFormatService {
    constructor() {
    }

    fromSeconds(seconds: number): string {
        if (seconds >= 600) {
            throw new RangeError(`${this.constructor.name}.fromSeconds cannot handle values over 600. Value was ${seconds}`);
        }

        let nWholeSec = Math.floor(seconds);
        let nWholeMin = Math.floor(nWholeSec / 60);

        let nRetSec = nWholeSec % 60;
        let sRetSec = nRetSec < 10 ? `0${nRetSec}` : nRetSec.toString();
        let sRetMin = nWholeMin < 1 ? '0' : nWholeMin.toString();

        return `${sRetMin}:${sRetSec}`;
    }
}
