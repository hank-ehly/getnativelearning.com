/**
 * password.service.stub
 * getnative.org
 *
 * Created by henryehly on 2016/12/26.
 */

import { PasswordService } from './password.service';

export const STUBPasswordService: PasswordService = <PasswordService>{
    calculateStrength(password: string): number {
        return 0;
    }
};
