/**
 * local-storage.service.spec
 * getnative.org
 *
 * Created by henryehly on 2016/11/20.
 */

import { LocalStorageService } from './local-storage.service';
import { STUBLogger } from '../logger/logger.stub';

describe('LocalStorageService', () => {
    let localStorageService: LocalStorageService;

    beforeEach(() => {
        localStorage.clear();
        localStorageService = new LocalStorageService(STUBLogger, {});
        localStorageService.isBrowser = true;
    });

    it('should be able to set a key/value pair', () => {
        const key = 'aKey';
        const val = 'aVal';
        localStorageService.setItem(key, val);
        expect(localStorage.getItem(key)).toEqual(val);
    });

    it('should be able to update a key/value pair', () => {
        const key = 'aKey';
        const val = 'aVal';
        const val_updated = val + '_updated';
        localStorageService.setItem(key, val);
        localStorageService.setItem(key, val_updated);
        expect(localStorage.getItem(key)).toEqual(val_updated);
    });

    it('should be able to remove a key/value pair', () => {
        const key = 'aKey';
        const val = 'aVal';
        localStorageService.setItem(key, val);
        localStorageService.removeItem(key);
        expect(localStorage.getItem(key)).toBeNull();
    });

    it('should be able to check if a key/value pair exists', () => {
        const key = 'aKey';
        const val = 'aVal';
        localStorageService.setItem(key, val);
        const isSet = localStorageService.hasItem(key);
        expect(isSet).toEqual(true);
    });

    it('should be able to clear the local cache completely', () => {
        const key_1 = 'aKey_1';
        const val_1 = 'aVal_1';
        localStorageService.setItem(key_1, val_1);

        const key_2 = 'aKey_2';
        const val_2 = 'aVal_2';
        localStorageService.setItem(key_2, val_2);

        expect(localStorageService.length).toEqual(2);

        localStorageService.clear$.next();
        expect(localStorageService.length).toEqual(0);
    });

    it('should be able to store a boolean value', () => {
        const key = 'aKey';
        const val = true;
        localStorageService.setItem(key, val);
        expect(localStorageService.getItem(key)).toEqual(val);
    });

    it('should be able to store a number value', () => {
        const key = 'aKey';
        const val = 576;
        localStorageService.setItem(key, val);
        expect(localStorageService.getItem(key)).toEqual(val);
    });

    it('should be able to store an array', () => {
        const key = 'aKey';
        const val = [1, 2, 3];
        localStorageService.setItem(key, val);
        expect(localStorageService.getItem(key)).toEqual(val);
    });

    it('should not be able to store a null value', () => {
        const key = 'aKey';
        const val = <any>null;
        expect(() => localStorageService.setItem(key, val)).toThrowError('Cannot store a null or undefined value.');
    });

    it('should not be able to store an undefined value', () => {
        const key = 'aKey';
        const val = <any>undefined;
        expect(() => localStorageService.setItem(key, val)).toThrowError('Cannot store a null or undefined value.');
    });

    it('should be able to store a nested object', () => {
        const key = 'aKey';
        const val = {foo: 'bar', baz: ['foo', 'bar', 123]};
        localStorageService.setItem(key, val);
        expect(localStorageService.getItem(key)).toEqual(val);
    });
});
