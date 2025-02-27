import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';
import { DomActions } from '../../lib/dom-actions';

// must be run from dom-actions.click.html
describe('click', () => {
    let domActions: DomActions;

    before(() => {
        domActions = instantiateDomActions();
        document.cookie = 'testcookie1=testcookievalue1';
    });

    it('existing cookie matches by value', () => {
        const cookieMatch = domActions.cookieMatch('testcookie1', false);
        expect(cookieMatch).true;
    });

    it('existing cookie matches by value when reversed', () => {
        const cookieMatch = domActions.cookieMatch('testcookie1', true);
        expect(cookieMatch).false;
    });

    it('non-existent cookie does not match', () => {
        const cookieMatch = domActions.cookieMatch('nonexistentcookie', false);
        expect(cookieMatch).false;
    });

    it('non-existent cookie matches when reversed', () => {
        const cookieMatch = domActions.cookieMatch('nonexistentcookie', true);
        expect(cookieMatch).true;
    });

    it('matches partial cookie value', () => {
        const cookieMatch = domActions.cookieMatch('cookie1', false);
        expect(cookieMatch).true;
    });

    it('matches full cookie name=value', () => {
        const cookieMatch = domActions.cookieMatch('testcookie1=testcookievalue1', false);
        expect(cookieMatch).true;
    });
});
