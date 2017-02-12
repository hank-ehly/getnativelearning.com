/**
 * library.component.spec
 * get-native.com
 *
 * Created by henryehly on 2017/01/12.
 */

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { LibraryComponent } from './library.component';
import { SharedModule } from '../shared/shared.module';
import {
    SpecUtil,
    STUBRouter,
    UTCDateService,
    Logger,
    STUBLogger,
    NavbarService,
    HttpService,
    STUBHttpService,
    ToolbarService,
    CategoryListService
} from '../core/index';

export function main() {
    let comp: LibraryComponent;
    let fixture: ComponentFixture<LibraryComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let spec: SpecUtil;

    describe('LibraryComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SharedModule],
                declarations: [LibraryComponent],
                providers: [
                    {provide: Logger, useValue: STUBLogger},
                    {provide: Router, useValue: STUBRouter},
                    {provide: HttpService, useValue: STUBHttpService},
                    NavbarService,
                    {provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>'},
                    UTCDateService, ToolbarService, CategoryListService
                ]
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(LibraryComponent);
                spec = new SpecUtil(fixture);
                comp = fixture.componentInstance;
                fixture.detectChanges();
            });
        }));

        it('should display a list of videos', () => {
            let videos = spec.getNativeEl('.video-panels');
            expect(videos.children.length).toBeGreaterThan(0);
        });
    });
}
