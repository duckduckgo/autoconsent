import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { AutoCMP, Config } from '../../lib/types';
import { RunContext } from '../../lib/rules';

function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: false,
        autoAction: 'optOut',
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

describe('AutoConsent.handlePopup', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('action routing', () => {
        it('should call doOptOut when autoAction is optOut', async () => {
            const config = createTestConfig({ autoAction: 'optOut' });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            const doOptOutStub = sinon.stub(autoconsent, 'doOptOut').resolves(true);

            const result = await autoconsent.handlePopup(mockCmp);

            expect(doOptOutStub.calledOnce).to.be.true;
            expect(result).to.be.true;
        });

        it('should call doOptIn when autoAction is optIn', async () => {
            const config = createTestConfig({ autoAction: 'optIn' });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            const doOptInStub = sinon.stub(autoconsent, 'doOptIn').resolves(true);

            const result = await autoconsent.handlePopup(mockCmp);

            expect(doOptInStub.calledOnce).to.be.true;
            expect(result).to.be.true;
        });

        it('should not call doOptOut or doOptIn when autoAction is null', async () => {
            const config = createTestConfig({ autoAction: null });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            const doOptOutStub = sinon.stub(autoconsent, 'doOptOut');
            const doOptInStub = sinon.stub(autoconsent, 'doOptIn');

            const result = await autoconsent.handlePopup(mockCmp);

            expect(doOptOutStub.called).to.be.false;
            expect(doOptInStub.called).to.be.false;
            expect(result).to.be.true;
        });
    });

    describe('state management', () => {
        it('should update lifecycle to openPopupDetected', async () => {
            const config = createTestConfig({ autoAction: null });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            await autoconsent.handlePopup(mockCmp);

            expect(autoconsent.state.lifecycle).to.equal('openPopupDetected');
        });

        it('should set startTime when handling popup', async () => {
            const config = createTestConfig({ autoAction: null });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP();
            const beforeTime = Date.now();
            await autoconsent.handlePopup(mockCmp);
            const afterTime = Date.now();

            expect(autoconsent.state.startTime).to.be.at.least(beforeTime);
            expect(autoconsent.state.startTime).to.be.at.most(afterTime);
        });

        it('should set foundCmp to the handled CMP', async () => {
            const config = createTestConfig({ autoAction: null });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const mockCmp = createMockCMP({ name: 'my-cmp' });
            await autoconsent.handlePopup(mockCmp);

            expect(autoconsent.foundCmp).to.equal(mockCmp);
            expect(autoconsent.foundCmp!.name).to.equal('my-cmp');
        });
    });

    describe('prehide behavior', () => {
        it('should apply prehide if shouldPrehide is true and prehideOn is false', async () => {
            const config = createTestConfig({ autoAction: null, enablePrehide: true });
            autoconsent = new AutoConsent(sendMessageStub, config, null);
            autoconsent.state.prehideOn = false;

            const prehideStub = sinon.stub(autoconsent, 'prehideElements').returns(true);
            const mockCmp = createMockCMP();

            await autoconsent.handlePopup(mockCmp);

            expect(prehideStub.calledOnce).to.be.true;
        });

        it('should not apply prehide if shouldPrehide is false', async () => {
            const config = createTestConfig({ autoAction: null, enablePrehide: false });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            const prehideStub = sinon.stub(autoconsent, 'prehideElements');
            const mockCmp = createMockCMP();

            await autoconsent.handlePopup(mockCmp);

            expect(prehideStub.called).to.be.false;
        });

        it('should not reapply prehide if already on', async () => {
            const config = createTestConfig({ autoAction: null, enablePrehide: true });
            autoconsent = new AutoConsent(sendMessageStub, config, null);
            autoconsent.state.prehideOn = true;

            const prehideStub = sinon.stub(autoconsent, 'prehideElements');
            const mockCmp = createMockCMP();

            await autoconsent.handlePopup(mockCmp);

            expect(prehideStub.called).to.be.false;
        });
    });
});
