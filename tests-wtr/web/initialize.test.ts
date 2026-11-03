import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { Config } from '../../lib/types';

/**
 * Creates a minimal Config object for testing
 */
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

describe('AutoConsent.initialize', () => {
    let startStub: sinon.SinonStub;
    let stopPropagation: (e: Event) => void;

    beforeEach(() => {
        sinon.stub(document, 'readyState').get(() => 'loading');
        startStub = sinon.stub(AutoConsent.prototype, 'start');
        stopPropagation = (e: Event) => e.stopPropagation();
        document.addEventListener('DOMContentLoaded', stopPropagation);
    });

    afterEach(() => {
        document.removeEventListener('DOMContentLoaded', stopPropagation);
        sinon.restore();
    });

    it('should start detection on DOMContentLoaded even if the page stops its propagation', () => {
        const autoconsent = new AutoConsent(sinon.stub().resolves(), createTestConfig(), null);
        expect(autoconsent.state.lifecycle).to.equal('initialized');
        expect(startStub.called).to.be.false;

        document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));

        expect(startStub.calledOnce).to.be.true;
    });

    it('should start detection only once', () => {
        const autoconsent = new AutoConsent(sinon.stub().resolves(), createTestConfig(), null);
        expect(autoconsent.state.lifecycle).to.equal('initialized');

        document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
        document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));

        expect(startStub.calledOnce).to.be.true;
    });
});
