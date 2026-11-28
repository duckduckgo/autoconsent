import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { AutoCMP, Config } from '../../lib/types';
import { RunContext } from '../../lib/rules';

function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: false,
        autoAction: null,
        disabledCmps: [],
        enablePrehide: false,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 0,
        isMainWorld: false,
        prehideTimeout: 2000,
        enableHeuristicDetection: false,
        heuristicMode: 'off',
        visualTest: false,
        enablePopupMutationObserver: false,
        logs: {
            lifecycle: false,
            rulesteps: false,
            detectionsteps: false,
            evals: false,
            errors: false,
            messages: false,
            waits: false,
        },
        ...overrides,
    };
}

function createMockCMP(overrides: Partial<AutoCMP> = {}): AutoCMP {
    const runContext: RunContext = {};
    return {
        name: 'test-cmp',
        hasSelfTest: false,
        isIntermediate: false,
        isCosmetic: false,
        runContext,
        checkRunContext: () => true,
        checkFrameContext: () => true,
        hasMatchingUrlPattern: () => false,
        detectCmp: async () => true,
        detectPopup: async () => true,
        optOut: async () => true,
        optIn: async () => true,
        openCmp: async () => true,
        test: async () => true,
        ...overrides,
    };
}

describe('AutoConsent.waitForPopup', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;
    let clock: sinon.SinonFakeTimers;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        const config = createTestConfig();
        autoconsent = new AutoConsent(sendMessageStub, config, null);
        sendMessageStub.resetHistory();
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        clock.restore();
        sinon.restore();
    });

    describe('immediate detection', () => {
        it('should return true when popup is detected immediately', async () => {
            const mockCmp = createMockCMP({ detectPopup: async () => true });

            const result = await autoconsent.waitForPopup(mockCmp, 0);

            expect(result).to.be.true;
        });

        it('should return false when popup is not detected and no retries', async () => {
            const mockCmp = createMockCMP({ detectPopup: async () => false });

            const result = await autoconsent.waitForPopup(mockCmp, 0);

            expect(result).to.be.false;
        });
    });

    describe('retry logic', () => {
        it('should retry when popup not detected and retries > 0', async () => {
            const mockCmp = createMockCMP();
            let callCount = 0;
            mockCmp.detectPopup = async () => {
                callCount++;
                return callCount > 1;
            };

            const promise = autoconsent.waitForPopup(mockCmp, 2, 100);
            await clock.tickAsync(100);

            const result = await promise;

            expect(result).to.be.true;
            expect(callCount).to.equal(2);
        });

        it('should return false after exhausting all retries', async () => {
            const mockCmp = createMockCMP({ detectPopup: async () => false });

            const promise = autoconsent.waitForPopup(mockCmp, 2, 100);
            await clock.tickAsync(200);

            const result = await promise;

            expect(result).to.be.false;
        });

        it('should wait for specified interval between retries', async () => {
            const mockCmp = createMockCMP();
            const detectStub = sinon.stub();
            detectStub.onCall(0).resolves(false);
            detectStub.onCall(1).resolves(true);
            mockCmp.detectPopup = detectStub;

            const promise = autoconsent.waitForPopup(mockCmp, 1, 500);
            
            expect(detectStub.callCount).to.equal(1);
            
            await clock.tickAsync(500);
            await promise;

            expect(detectStub.callCount).to.equal(2);
        });
    });

    describe('error handling', () => {
        it('should handle detectPopup throwing error', async () => {
            const mockCmp = createMockCMP({
                detectPopup: async () => {
                    throw new Error('Detection error');
                },
            });

            const result = await autoconsent.waitForPopup(mockCmp, 0);

            expect(result).to.be.false;
        });

        it('should continue retrying after detectPopup error', async () => {
            const mockCmp = createMockCMP();
            const detectStub = sinon.stub();
            detectStub.onCall(0).rejects(new Error('First error'));
            detectStub.onCall(1).resolves(true);
            mockCmp.detectPopup = detectStub;

            const promise = autoconsent.waitForPopup(mockCmp, 1, 100);
            await clock.tickAsync(100);

            const result = await promise;

            expect(result).to.be.true;
            expect(detectStub.callCount).to.equal(2);
        });
    });

    describe('with mutation observer', () => {
        it('should wait for both interval and mutation when enabled', async () => {
            const config = createTestConfig({ enablePopupMutationObserver: true });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            const detectStub = sinon.stub();
            detectStub.onCall(0).resolves(false);
            detectStub.onCall(1).resolves(true);
            mockCmp.detectPopup = detectStub;

            const waitStub = sinon.stub(autoconsent.domActions, 'wait').resolves(true);
            const mutationStub = sinon.stub(autoconsent.domActions, 'waitForMutation').resolves(true);

            await autoconsent.waitForPopup(mockCmp, 1, 100);

            expect(waitStub.calledWith(100)).to.be.true;
            expect(mutationStub.calledWith('html', 10000)).to.be.true;
        });

        it('should not use mutation observer when disabled', async () => {
            const config = createTestConfig({ enablePopupMutationObserver: false });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP({ detectPopup: async () => false });

            const mutationStub = sinon.stub(autoconsent.domActions, 'waitForMutation');
            const waitStub = sinon.stub(autoconsent.domActions, 'wait').resolves(true);

            await autoconsent.waitForPopup(mockCmp, 1, 100);

            expect(mutationStub.called).to.be.false;
            expect(waitStub.called).to.be.true;
        });
    });
});
