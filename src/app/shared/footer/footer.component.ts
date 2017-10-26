/**
 * footer.component
 * getnativelearning.com
 *
 * Created by henryehly on 2016/11/06.
 */

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Languages } from '../../core/lang/languages';
import { Logger } from '../../core/logger/logger';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

interface LocalizedLink {
    label: string;
    url: string;
}

@Component({
    selector: 'gn-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

    OnDestroy$ = new Subject<void>();
    year = new Date().getFullYear();
    languages = Languages;
    langLinks: LocalizedLink[] = [];
    // currLoc = window.location.host;

    constructor(private logger: Logger, private router: Router, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.logger.debug(this, 'OnInit');

        this.router.events
            .takeUntil(this.OnDestroy$)
            .map(() => this.location.path() !== '' ? this.location.path() : '/')
            .map(path => {
                const urls = [];
                for (const lang of this.languages) {
                    urls.push({label: lang.name, url: ['/', lang.code, path].join('')});
                }
                return urls;
            })
            .subscribe(urls => {
                this.langLinks = urls;
            });
    }

    ngOnDestroy(): void {
        this.logger.debug(this, 'OnDestroy');
        this.OnDestroy$.next();
    }

}
