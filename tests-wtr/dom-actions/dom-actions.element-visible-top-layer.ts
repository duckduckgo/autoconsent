import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';
import { DomActions } from '../../lib/dom-actions';

// must be run from dom-actions.element-visible-top-layer.html
describe('elementVisible in the top layer', () => {
    let domActions: DomActions;

    function withModal(id: string, fn: () => void) {
        const dialog = document.getElementById(id) as HTMLDialogElement;
        dialog.showModal();
        try {
            fn();
        } finally {
            dialog.close();
        }
    }

    function withPopover(id: string, fn: () => void) {
        const popover = document.getElementById(id)!;
        popover.showPopover();
        try {
            fn();
        } finally {
            popover.hidePopover();
        }
    }

    beforeEach(() => {
        domActions = instantiateDomActions();
    });

    it('treats a modal dialog as visible', () => {
        withModal('modal-dialog', () => {
            expect(domActions.elementVisible('#modal-dialog', 'all')).to.be.true;
            expect(domActions.elementVisible('#modal-dialog', 'none')).to.be.false;
        });
    });

    it('treats content of a modal dialog as visible', () => {
        withModal('modal-dialog', () => {
            expect(domActions.elementVisible('#modal-dialog button', 'all')).to.be.true;
        });
    });

    it('treats an open popover as visible', () => {
        withPopover('open-popover', () => {
            expect(domActions.elementVisible('#open-popover', 'all')).to.be.true;
        });
    });

    it('still treats a non-modal open dialog as visible', () => {
        const dialog = document.getElementById('non-modal-dialog') as HTMLDialogElement;
        dialog.show();
        try {
            expect(domActions.elementVisible('#non-modal-dialog', 'all')).to.be.true;
        } finally {
            dialog.close();
        }
    });

    it('treats a closed dialog as hidden', () => {
        expect(domActions.elementVisible('#closed-dialog', 'any')).to.be.false;
        expect(domActions.elementVisible('#closed-dialog', 'none')).to.be.true;
    });

    it('treats a closed popover as hidden', () => {
        expect(domActions.elementVisible('#closed-popover', 'any')).to.be.false;
    });
});
