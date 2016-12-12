/**
 * study-progress.component
 * get-native.com
 *
 * Created by henryehly on 2016/12/13.
 */

import { Component, OnInit } from '@angular/core';

import { Logger } from 'angular2-logger/core';

@Component({
    moduleId: module.id,
    selector: 'gn-study-progress',
    templateUrl: 'study-progress.component.html',
    styleUrls: ['study-progress.component.css']
})
export class StudyProgressComponent implements OnInit {
    constructor(private logger: Logger) {
    }

    ngOnInit() {
        this.logger.info('[StudyProgressComponent] ngOnInit()');
    }
}
