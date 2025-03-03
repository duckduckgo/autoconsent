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
        const cookieContains = domActions.cookieContains('testcookie1', false);
        expect(cookieContains).true;
    });

    it('existing cookie matches by value when reversed', () => {
        const cookieContains = domActions.cookieContains('testcookie1', true);
        expect(cookieContains).false;
    });

    it('non-existent cookie does not match', () => {
        const cookieContains = domActions.cookieContains('nonexistentcookie', false);
        expect(cookieContains).false;
    });

    it('non-existent cookie matches when reversed', () => {
        const cookieContains = domActions.cookieContains('nonexistentcookie', true);
        expect(cookieContains).true;
    });

    it('matches partial cookie value', () => {
        const cookieContains = domActions.cookieContains('cookie1', false);
        expect(cookieContains).true;
    });

    it('matches full cookie name=value', () => {
        const cookieContains = domActions.cookieContains('testcookie1=testcookievalue1', false);
        expect(cookieContains).true;
    });
});
