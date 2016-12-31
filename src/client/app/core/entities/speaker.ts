/**
 * speaker
 * get-native.com
 *
 * Created by henryehly on 2016/12/24.
 */

import { Entity } from './entity';
import { LangCode, Gender } from '../typings/index';

export class Speaker extends Entity {
    description: string;

    name: string;

    lang: LangCode;

    gender: Gender;

    location: string;
}
