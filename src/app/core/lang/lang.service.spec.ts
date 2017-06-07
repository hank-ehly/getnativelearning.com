/**
 * lang.service.spec
 * get-native.com
 *
 * Created by henryehly on 2016/12/29.
 */

import { LangService } from './lang.service';
import { Languages } from './languages';

import * as _ from 'lodash';

export function main() {
    let service: LangService;

    describe('LangService', () => {
        beforeAll(() => {
            service = new LangService();
        });

        it('should convert \'en\' to \'English\'', () => {
            const expected = 'English';
            const actual = service.codeToName('en');
            expect(actual).toEqual(expected);
        });

        it('should convert \'ja\' to \'日本語\'', () => {
            const expected = '日本語';
            const actual = service.codeToName('ja');
            expect(actual).toEqual(expected);
        });

        it('should return the appropriate Language given a language code', () => {
            const expected = _.first(Languages);

            const langCode = _.first(Languages).code;
            const actual = service.languageForCode(langCode);

            expect(actual).toEqual(expected);
        });
    });
}
