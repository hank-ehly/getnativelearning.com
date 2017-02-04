/**
 * switch.component
 * get-native.com
 *
 * Created by henryehly on 2016/12/11.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gn-switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['switch.component.css']
})
export class SwitchComponent {
    @Input() on: boolean = false;
    @Output() toggle = new EventEmitter<boolean>();

    onToggle(): void {
        this.toggle.emit(this.on);
    }
}
