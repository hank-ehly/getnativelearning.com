/**
 * login.module
 * get-native.com
 *
 * Created by henryehly on 2016/11/23.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService, LoginComponent, SocialLoginComponent, RegisterComponent, EmailLoginComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [LoginComponent, SocialLoginComponent, EmailLoginComponent, RegisterComponent],
    exports: [LoginComponent, SocialLoginComponent, EmailLoginComponent, RegisterComponent],
    providers: [LoginService]
})

export class LoginModule {
}
