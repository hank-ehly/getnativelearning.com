import { Component, OnDestroy, OnInit } from '@angular/core';

import { Logger } from '../core/logger/logger';
import { ActivatedRoute } from '@angular/router';
import { APIError, APIErrors } from '../core/http/api-error';
import { HttpService } from '../core/http/http.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { APIHandle } from '../core/http/api-handle';
import * as _ from 'lodash';

@Component({
    selector: 'gn-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit, OnDestroy {

    OnDestroy$ = new Subject<void>();
    token: string;
    model = {password: '', confirm: ''};
    error: APIError;

    constructor(private logger: Logger, private route: ActivatedRoute, private http: HttpService) {
        this.token = this.route.snapshot.data['token'];
        this.error = {
            message: 'Bad value in the thingy!',
            code: 'bad foo'
        };
    }

    ngOnInit(): void {
        this.logger.debug(this, 'OnInit');
    }

    ngOnDestroy(): void {
        this.logger.debug(this, 'OnDestroy');
        this.OnDestroy$.next();
    }

    onSubmit(): void {
        this.logger.debug(this, 'OnSubmit');

        const options = {
            body: {
                password: this.model.password,
                token: this.token
            }
        };

        this.http.request(APIHandle.RESET_PASSWORD, options)
            .takeUntil(this.OnDestroy$)
            .subscribe(
                this.onResetPasswordNext.bind(this),
                this.onResetPasswordError.bind(this)
            );
    }

    private onResetPasswordNext(): void {
    }

    private onResetPasswordError(errors: APIErrors): void {
        if (errors.length) {
            this.error = _.first(errors);
        }
    }

}
