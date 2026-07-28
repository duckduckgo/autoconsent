import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { AutoCMP, Config } from '../../lib/types';
import { RunContext } from '../../lib/rules';

function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: true,
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

describe('AutoConsent.handleBFCacheRestore', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        const config = createTestConfig();
        autoconsent = new AutoConsent(sendMessageStub, config, null);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should re-apply cosmetic opt-out after bfcache restore', async () => {
        const optOutStub = sinon.stub().resolves(true);
        const cosmeticCmp = createMockCMP({ isCosmetic: true, optOut: optOutStub });
        autoconsent.foundCmp = cosmeticCmp;
        autoconsent.updateState({ lifecycle: 'done' });

        autoconsent.handleBFCacheRestore();
        await new Promise((resolve) => setTimeout(resolve, 600));

        expect(optOutStub.calledOnce).to.be.true;
    });

    it('should not re-apply opt-out for non-cosmetic CMPs', async () => {
        const optOutStub = sinon.stub().resolves(true);
        const cmp = createMockCMP({ isCosmetic: false, optOut: optOutStub });
        autoconsent.foundCmp = cmp;
        autoconsent.updateState({ lifecycle: 'done' });

        autoconsent.handleBFCacheRestore();
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(optOutStub.called).to.be.false;
    });

    it('should not re-apply opt-out when lifecycle is not done', async () => {
        const optOutStub = sinon.stub().resolves(true);
        const cosmeticCmp = createMockCMP({ isCosmetic: true, optOut: optOutStub });
        autoconsent.foundCmp = cosmeticCmp;
        autoconsent.updateState({ lifecycle: 'cmpDetected' });

        autoconsent.handleBFCacheRestore();
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(optOutStub.called).to.be.false;
    });
});
