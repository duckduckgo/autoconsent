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
        enablePrehide: true,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 0,
        isMainWorld: false,
        prehideTimeout: 2000,
        enableHeuristicDetection: false,
        heuristicMode: 'off',
        visualTest: false,
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
        prehideSelectors: [],
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

describe('AutoConsent prehide functionality', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        const config = createTestConfig();
        autoconsent = new AutoConsent(sendMessageStub, config, null);
        sendMessageStub.resetHistory();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('shouldPrehide', () => {
        it('should return true when enablePrehide is true and not visualTest', () => {
            const config = createTestConfig({ enablePrehide: true, visualTest: false });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            expect(autoconsent.shouldPrehide).to.be.true;
        });

        it('should return false when enablePrehide is false', () => {
            const config = createTestConfig({ enablePrehide: false });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            expect(autoconsent.shouldPrehide).to.be.false;
        });

        it('should return false when visualTest is true', () => {
            const config = createTestConfig({ enablePrehide: true, visualTest: true });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            expect(autoconsent.shouldPrehide).to.be.false;
        });
    });

    describe('prehideElements', () => {
        it('should call domActions.prehide with combined selectors', () => {
            const mockCmp1 = createMockCMP({
                prehideSelectors: ['.cookie-banner'],
                checkRunContext: () => true,
            });
            const mockCmp2 = createMockCMP({
                prehideSelectors: ['.consent-popup'],
                checkRunContext: () => true,
            });
            autoconsent.rules.push(mockCmp1, mockCmp2);

            const prehideStub = sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            autoconsent.prehideElements();

            expect(prehideStub.calledOnce).to.be.true;
            const calledSelector = prehideStub.firstCall.args[0] as string;
            expect(calledSelector).to.include('.cookie-banner');
            expect(calledSelector).to.include('.consent-popup');
        });

        it('should include global selectors', () => {
            const prehideStub = sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            autoconsent.prehideElements();

            expect(prehideStub.calledOnce).to.be.true;
            const calledSelector = prehideStub.firstCall.args[0] as string;
            expect(calledSelector).to.include('#didomi-popup');
        });

        it('should filter rules that do not pass checkRunContext', () => {
            const includedCmp = createMockCMP({
                prehideSelectors: ['.included'],
                checkRunContext: () => true,
            });
            const excludedCmp = createMockCMP({
                prehideSelectors: ['.excluded'],
                checkRunContext: () => false,
            });
            autoconsent.rules.push(includedCmp, excludedCmp);

            const prehideStub = sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            autoconsent.prehideElements();

            const calledSelector = prehideStub.firstCall.args[0] as string;
            expect(calledSelector).to.include('.included');
            expect(calledSelector).to.not.include('.excluded');
        });

        it('should update prehideOn state to true', () => {
            sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            autoconsent.prehideElements();

            expect(autoconsent.state.prehideOn).to.be.true;
        });

        it('should return result from domActions.prehide', () => {
            sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            const result = autoconsent.prehideElements();

            expect(result).to.be.true;
        });

        it('should skip rules without prehideSelectors', () => {
            const withSelectors = createMockCMP({
                prehideSelectors: ['.has-selectors'],
                checkRunContext: () => true,
            });
            const withoutSelectors = createMockCMP({
                prehideSelectors: undefined,
                checkRunContext: () => true,
            });
            autoconsent.rules.push(withSelectors, withoutSelectors);

            const prehideStub = sinon.stub(autoconsent.domActions, 'prehide').returns(true);

            autoconsent.prehideElements();

            const calledSelector = prehideStub.firstCall.args[0] as string;
            expect(calledSelector).to.include('.has-selectors');
        });
    });

    describe('undoPrehide', () => {
        it('should call domActions.undoPrehide', () => {
            const undoPrehideStub = sinon.stub(autoconsent.domActions, 'undoPrehide');

            autoconsent.undoPrehide();

            expect(undoPrehideStub.calledOnce).to.be.true;
        });

        it('should update prehideOn state to false', () => {
            autoconsent.state.prehideOn = true;
            sinon.stub(autoconsent.domActions, 'undoPrehide');

            autoconsent.undoPrehide();

            expect(autoconsent.state.prehideOn).to.be.false;
        });
    });

    describe('prehide timeout', () => {
        it('should schedule undoPrehide after timeout', (done) => {
            const config = createTestConfig({ prehideTimeout: 50 });
            autoconsent = new AutoConsent(sendMessageStub, config, null);
            autoconsent.state.lifecycle = 'loading';

            sinon.stub(autoconsent.domActions, 'prehide').returns(true);
            const undoPrehideStub = sinon.stub(autoconsent, 'undoPrehide');

            autoconsent.prehideElements();

            setTimeout(() => {
                expect(undoPrehideStub.calledOnce).to.be.true;
                done();
            }, 60);
        });

        it('should not undoPrehide if already in runningOptOut state', (done) => {
            const config = createTestConfig({ prehideTimeout: 50 });
            autoconsent = new AutoConsent(sendMessageStub, config, null);
            autoconsent.state.lifecycle = 'runningOptOut';

            sinon.stub(autoconsent.domActions, 'prehide').returns(true);
            const undoPrehideStub = sinon.stub(autoconsent, 'undoPrehide');

            autoconsent.prehideElements();

            setTimeout(() => {
                expect(undoPrehideStub.called).to.be.false;
                done();
            }, 60);
        });

        it('should not undoPrehide if prehideOn was turned off', (done) => {
            const config = createTestConfig({ prehideTimeout: 50 });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            sinon.stub(autoconsent.domActions, 'prehide').returns(true);
            const undoPrehideStub = sinon.stub(autoconsent, 'undoPrehide');

            autoconsent.prehideElements();
            autoconsent.state.prehideOn = false;

            setTimeout(() => {
                expect(undoPrehideStub.called).to.be.false;
                done();
            }, 60);
        });
    });
});
