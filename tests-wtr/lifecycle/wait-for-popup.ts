import { expect } from '@esm-bundle/chai';
import Autoconsent from '../../lib/web';
import { AutoCMP } from '../../lib/types';

function createAutoconsent(enablePopupMutationObserver: boolean): Autoconsent {
    return new Autoconsent(() => Promise.resolve(), {
        enabled: false,
        autoAction: null,
        enablePopupMutationObserver,
    });
}

function createMockCmp(detectPopupFn: () => Promise<boolean>): AutoCMP {
    return {
        name: 'mock-cmp',
        hasSelfTest: false,
        isIntermediate: false,
        isCosmetic: false,
        runContext: { main: true, frame: false },
        checkRunContext: () => true,
        checkFrameContext: () => true,
        hasMatchingUrlPattern: () => true,
        detectCmp: () => Promise.resolve(true),
        detectPopup: detectPopupFn,
        optOut: () => Promise.resolve(true),
        optIn: () => Promise.resolve(true),
        openCmp: () => Promise.resolve(true),
        test: () => Promise.resolve(true),
    };
}

describe('Autoconsent.waitForPopup', () => {
    describe('without mutation observer (legacy polling)', () => {
        let autoconsent: Autoconsent;

        beforeEach(() => {
            autoconsent = createAutoconsent(false);
        });

        it('should resolve true if popup is detected on first check', async () => {
            const cmp = createMockCmp(() => Promise.resolve(true));
            const result = await autoconsent.waitForPopup(cmp, 5, 50);
            expect(result).to.be.true;
        });

        it('should resolve false if popup is never detected', async () => {
            const cmp = createMockCmp(() => Promise.resolve(false));
            const result = await autoconsent.waitForPopup(cmp, 2, 50);
            expect(result).to.be.false;
        });

        it('should retry and detect popup that appears later', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                return Promise.resolve(callCount >= 3);
            });
            const result = await autoconsent.waitForPopup(cmp, 5, 50);
            expect(result).to.be.true;
            expect(callCount).to.equal(3);
        });

        it('should handle errors in detectPopup gracefully', async () => {
            const cmp = createMockCmp(() => Promise.reject(new Error('detection error')));
            const result = await autoconsent.waitForPopup(cmp, 2, 50);
            expect(result).to.be.false;
        });

        it('should not retry when retries is 0', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                return Promise.resolve(false);
            });
            const result = await autoconsent.waitForPopup(cmp, 0, 50);
            expect(result).to.be.false;
            expect(callCount).to.equal(1);
        });
    });

    describe('with mutation observer', () => {
        let autoconsent: Autoconsent;

        beforeEach(() => {
            autoconsent = createAutoconsent(true);
        });

        it('should resolve true if popup is detected on first check', async () => {
            const cmp = createMockCmp(() => Promise.resolve(true));
            const result = await autoconsent.waitForPopup(cmp, 5, 50);
            expect(result).to.be.true;
        });

        it('should resolve false when retries are exhausted despite mutations', async () => {
            const cmp = createMockCmp(() => Promise.resolve(false));

            const mutationInterval = setInterval(() => {
                const el = document.createElement('div');
                el.className = 'test-exhaust-mutation';
                document.body.appendChild(el);
            }, 30);

            const result = await autoconsent.waitForPopup(cmp, 2, 50);

            clearInterval(mutationInterval);
            document.querySelectorAll('.test-exhaust-mutation').forEach((el) => el.remove());

            expect(result).to.be.false;
        });

        it('should retry when a DOM mutation occurs and detect popup', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                return Promise.resolve(callCount >= 2);
            });

            // schedule a DOM mutation so the observer resolves
            setTimeout(() => {
                const el = document.createElement('span');
                el.id = 'test-mutation-element';
                document.body.appendChild(el);
            }, 30);

            const result = await autoconsent.waitForPopup(cmp, 5, 50);
            expect(result).to.be.true;
            expect(callCount).to.equal(2);

            document.getElementById('test-mutation-element')?.remove();
        });

        it('should detect popup that appears after multiple mutations', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                return Promise.resolve(callCount >= 3);
            });

            // schedule DOM mutations to keep the observer firing
            const mutationInterval = setInterval(() => {
                const el = document.createElement('div');
                el.className = 'test-multi-mutation';
                document.body.appendChild(el);
            }, 40);

            const result = await autoconsent.waitForPopup(cmp, 5, 50);

            clearInterval(mutationInterval);
            document.querySelectorAll('.test-multi-mutation').forEach((el) => el.remove());

            expect(result).to.be.true;
            expect(callCount).to.equal(3);
        });

        it('should handle errors in detectPopup gracefully', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                if (callCount <= 2) {
                    return Promise.reject(new Error('transient error'));
                }
                return Promise.resolve(true);
            });

            // schedule mutations so retries proceed
            const mutationInterval = setInterval(() => {
                const el = document.createElement('div');
                el.className = 'test-error-mutation';
                document.body.appendChild(el);
            }, 30);

            const result = await autoconsent.waitForPopup(cmp, 5, 50);

            clearInterval(mutationInterval);
            document.querySelectorAll('.test-error-mutation').forEach((el) => el.remove());

            expect(result).to.be.true;
            expect(callCount).to.equal(3);
        });

        it('should not retry when retries is 0', async () => {
            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                return Promise.resolve(false);
            });
            const result = await autoconsent.waitForPopup(cmp, 0, 50);
            expect(result).to.be.false;
            expect(callCount).to.equal(1);
        });

        it('should continue retrying after mutation observer timeout', async () => {
            // Override waitForMutation to use a very short timeout so it rejects quickly
            const originalWaitForMutation = autoconsent.domActions.waitForMutation.bind(autoconsent.domActions);
            autoconsent.domActions.waitForMutation = (selector, _timeout?) => {
                return originalWaitForMutation(selector, 10);
            };

            let callCount = 0;
            const cmp = createMockCmp(() => {
                callCount++;
                // popup appears on the 3rd attempt (after 2 mutation timeouts)
                return Promise.resolve(callCount >= 3);
            });

            const result = await autoconsent.waitForPopup(cmp, 5, 50);

            autoconsent.domActions.waitForMutation = originalWaitForMutation;

            expect(result).to.be.true;
            expect(callCount).to.equal(3);
        });
    });
});
