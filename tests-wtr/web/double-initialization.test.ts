import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { Config } from '../../lib/types';
import { AutoConsentCMPRule } from '../../lib/rules';

/**
 * Creates a minimal Config object for testing
 */
function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: true,
        autoAction: 'optOut',
        disabledCmps: [],
        enablePrehide: false,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 0,
        isMainWorld: true,
        prehideTimeout: 2000,
        enableHeuristicDetection: false,
        enablePopupMutationObserver: false,
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
        performanceLoggingEnabled: false,
        heuristicPopupSearchTimeout: 100,
        ...overrides,
    };
}

const testRule: AutoConsentCMPRule = {
    name: 'test-cmp',
    detectCmp: [{ exists: 'html' }],
    detectPopup: [{ exists: 'html' }],
    optOut: [{ exists: 'html' }],
    optIn: [],
};

describe('AutoConsent initialization', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;
    let startStub: sinon.SinonStub;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        autoconsent = new AutoConsent(sendMessageStub, null, null);
        startStub = sinon.stub(autoconsent, 'start');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('initializes on the first init response', async () => {
        await autoconsent.receiveMessageCallback({
            type: 'initResp',
            config: createTestConfig(),
            rules: { autoconsent: [testRule] },
        });

        expect(startStub.callCount).to.equal(1);
        expect(autoconsent.rules.filter((cmp) => cmp.name === testRule.name)).to.have.length(1);
    });

    it('ignores a repeated init response', async () => {
        const initResp = {
            type: 'initResp' as const,
            config: createTestConfig(),
            rules: { autoconsent: [testRule] },
        };
        await autoconsent.receiveMessageCallback(initResp);
        await autoconsent.receiveMessageCallback(initResp);

        // A second detection pass would race the first one, clicking the same popup twice.
        expect(startStub.callCount).to.equal(1);
        expect(autoconsent.rules.filter((cmp) => cmp.name === testRule.name)).to.have.length(1);
    });
});
