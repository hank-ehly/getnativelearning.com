/**
 * transcript.component.spec
 * get-native.com
 *
 * Created by henryehly on 2016/12/29.
 */

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TranscriptComponent } from './transcript.component';
import { SpecUtil } from '../../core/spec/spec-util';
import { Logger } from '../../core/logger/logger';
import { STUBLogger } from '../../core/logger/logger.stub';
import { LangService } from '../../core/lang/lang.service';
import { STUBTranscripts } from '../../core/entities/transcripts.stub';

export function main() {
    let comp: TranscriptComponent;
    let fixture: ComponentFixture<TranscriptComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let util: SpecUtil;

    describe('TranscriptComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TranscriptComponent],
                providers: [{provide: Logger, useValue: STUBLogger}, LangService]
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(TranscriptComponent);
                util = new SpecUtil(fixture);
                comp = fixture.componentInstance;
                comp.transcripts = STUBTranscripts;
                comp.selectedCollocation = STUBTranscripts.records[0].collocations.records[0];
                fixture.detectChanges();
            });
        }));

        it('should display 2 or more tabs', () => {
            let tabs = util.getNativeEl('.tabs-frame .tabs');
            expect(tabs.children.length).toBeGreaterThanOrEqual(2);
        });

        it('should display transcript content', () => {
            let content = util.getNativeEl('.tab-content .content');
            expect(content.textContent.length).toBeGreaterThan(0);
        });

        it('should display the selected collocation', () => {
            let collocation = util.getNativeEl('.usage-examples-section__header-collocation');
            expect(collocation.textContent.length).toBeGreaterThan(0);
        });

        it('should display 1+ usage examples', () => {
            let examples = util.getNativeEl('.usage-examples');
            expect(examples.children.length).toBeGreaterThanOrEqual(1);
        });
    });
}
