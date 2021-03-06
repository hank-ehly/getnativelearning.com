/**
 * high-res-timestamp.pipe
 * getnative.org
 *
 * Created by henryehly on 2017/01/11.
 */

import { Pipe, PipeTransform } from '@angular/core';

import { UTCDateService } from '../../core/utc-date/utc-date.service';

import * as _ from 'lodash';

@Pipe({
    name: 'digitalTime'
})
export class DigitalTimePipe implements PipeTransform {

    constructor(private dateService: UTCDateService) {
    }

    transform(value: any, ...args: any[]): any {
        if (_.gte(value, 600)) {
            throw new RangeError(`${this.constructor.name}.fromSeconds cannot handle values over 600. Value was ${value}`);
        }

        const seconds = Math.floor(value);
        const date = this.dateService.dateFromSeconds(seconds);

        return `${date.getUTCMinutes()}:${this.dateService.getUTCPaddedSeconds(date)}`;
    }

}
