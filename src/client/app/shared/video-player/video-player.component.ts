/**
 * video-player.component
 * get-native.com
 *
 * Created by henryehly on 2016/12/07.
 */

import { Component, OnInit, ViewChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';

import { VideoDirective } from '../video/video.directive';
import { UnitInterval, Logger } from '../../core/index';

import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'gn-video-player',
    templateUrl: 'video-player.component.html',
    styleUrls: ['video-player.component.css'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({opacity: 0}), animate(200, style({opacity: 1}))
            ]),
            transition(':leave', [
                animate(200, style({opacity: 0}))
            ])
        ])
    ]
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() loop: boolean;
    @Input() src: string;
    @ViewChild(VideoDirective) player: VideoDirective;

    tooltipHidden: boolean;
    controlsHidden: boolean;

    progress: UnitInterval;
    currentTime: UnitInterval;

    private tooltipTimeout: NodeJS.Timer;
    private previousVolume: UnitInterval;
    private subscriptions: Subscription[] = [];

    constructor(private logger: Logger) {
        this.progress = this.currentTime = 0;
        this.controlsHidden = false;
        this.tooltipHidden = true;
    }

    get volumeControlFillStyle(): {width: string} {
        let volumePercentString = (this.player.volume * 100) + '%';
        return {width: volumePercentString};
    }

    ngOnInit(): void {
        this.logger.info(this, 'ngOnInit()');
    }

    ngOnDestroy(): void {
        this.logger.debug(this, 'ngOnDestroy - Unsubscribe all', this.subscriptions);
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    ngAfterViewInit(): void {
        this.subscriptions.push(
            this.player.currentTime$.subscribe(this.onCurrentTime.bind(this)),
            this.player.progress$.subscribe(this.onProgress.bind(this))
        );
    }

    onClickToggleButton(): void {
        this.togglePlayback();
    }

    onMouseEnterPlayerFrame(): void {
        this.controlsHidden = false;
    }

    onMouseLeavePlayerFrame(): void {
        this.hideTooltip();

        if (!this.player.paused) {
            this.controlsHidden = true;
        }
    }

    onClickVolumeControl(e: MouseEvent): void {
        if (!['volume-control', 'volume-control__icon'].includes((<HTMLElement>e.target).className)) {
            return;
        }

        if (this.player.volume > 0) {
            this.previousVolume = this.player.volume;
            this.player.volume = 0;
        } else if (this.previousVolume) {
            this.player.volume = this.previousVolume;
        } else {
            this.player.volume = 1;
        }
    }

    onMouseEnterVolumeControl(): void {
        this.showTooltip();
    }

    onMouseLeaveVolumeControl(): void {
        this.hideTooltip(400);
    }

    onInputCurrentTime(time: string) {
        this.player.currentTime = this.player.duration * +time;
    }

    private togglePlayback(): void {
        this.player.paused ? this.player.play() : this.player.pause();
    }

    private showTooltip(): void {
        this.tooltipHidden = false;

        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
    }

    private hideTooltip(delay?: number): void {
        this.tooltipTimeout = setTimeout(() => this.tooltipHidden = true, delay || 0);
    }

    private onCurrentTime(timeInSeconds: number): void {
        this.currentTime = (timeInSeconds / this.player.duration);
    }

    private onProgress(progress: UnitInterval) {
        this.progress = progress;
    }
}
