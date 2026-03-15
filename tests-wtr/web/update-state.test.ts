import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { Config, ConsentState } from '../../lib/types';

/**
 * Creates a minimal Config object for testing
 */
function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: false, // disabled to prevent auto-start
        autoAction: null,
        disabledCmps: [],
        enablePrehide: false,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 0,
        isMainWorld: false,
        prehideTimeout: 2000,
        enableFilterList: false,
        enableHeuristicDetection: false,
        enableHeuristicAction: false,
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

describe('AutoConsent.updateState', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        const config = createTestConfig();
        autoconsent = new AutoConsent(sendMessageStub, config, null);
        // Clear any calls from constructor
        sendMessageStub.resetHistory();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('state updates', () => {
        it('should update lifecycle state', () => {
            autoconsent.updateState({ lifecycle: 'started' });

            expect(autoconsent.state.lifecycle).to.equal('started');
        });

        it('should update multiple state properties at once', () => {
            autoconsent.updateState({
                lifecycle: 'cmpDetected',
                detectedCmps: ['cookiebot'],
                findCmpAttempts: 3,
            });

            expect(autoconsent.state.lifecycle).to.equal('cmpDetected');
            expect(autoconsent.state.detectedCmps).to.deep.equal(['cookiebot']);
            expect(autoconsent.state.findCmpAttempts).to.equal(3);
        });

        it('should preserve existing state when updating partial state', () => {
            // Set initial state
            autoconsent.updateState({ clicks: 5, lifecycle: 'started' });

            // Update only lifecycle
            autoconsent.updateState({ lifecycle: 'cmpDetected' });

            expect(autoconsent.state.clicks).to.equal(5);
            expect(autoconsent.state.lifecycle).to.equal('cmpDetected');
        });

        it('should update array properties correctly', () => {
            autoconsent.updateState({ detectedCmps: ['cmp1', 'cmp2'] });

            expect(autoconsent.state.detectedCmps).to.deep.equal(['cmp1', 'cmp2']);
        });

        it('should update boolean properties', () => {
            autoconsent.updateState({ prehideOn: true, cosmeticFiltersOn: true });

            expect(autoconsent.state.prehideOn).to.be.true;
            expect(autoconsent.state.cosmeticFiltersOn).to.be.true;
        });

        it('should update numeric properties', () => {
            autoconsent.updateState({
                clicks: 10,
                startTime: 1234567890,
                endTime: 1234567900
            });

            expect(autoconsent.state.clicks).to.equal(10);
            expect(autoconsent.state.startTime).to.equal(1234567890);
            expect(autoconsent.state.endTime).to.equal(1234567900);
        });

        it('should update selfTest to true', () => {
            autoconsent.updateState({ selfTest: true });

            expect(autoconsent.state.selfTest).to.be.true;
        });

        it('should update selfTest to false', () => {
            autoconsent.updateState({ selfTest: false });

            expect(autoconsent.state.selfTest).to.be.false;
        });
    });

    describe('message sending', () => {
        it('should send report message on each update', () => {
            autoconsent.updateState({ lifecycle: 'started' });

            expect(sendMessageStub.calledOnce).to.be.true;
            const message = sendMessageStub.firstCall.args[0];
            expect(message.type).to.equal('report');
        });

        it('should include instanceId in report message', () => {
            autoconsent.updateState({ lifecycle: 'started' });

            const message = sendMessageStub.firstCall.args[0];
            expect(message.instanceId).to.equal(autoconsent.id);
        });

        it('should include current URL in report message', () => {
            autoconsent.updateState({ lifecycle: 'started' });

            const message = sendMessageStub.firstCall.args[0];
            expect(message.url).to.be.a('string');
        });

        it('should include mainFrame flag in report message', () => {
            autoconsent.updateState({ lifecycle: 'started' });

            const message = sendMessageStub.firstCall.args[0];
            expect(message.mainFrame).to.be.a('boolean');
        });

        it('should include full state in report message', () => {
            autoconsent.updateState({ lifecycle: 'started', clicks: 5 });

            const message = sendMessageStub.firstCall.args[0];
            expect(message.state).to.deep.include({
                lifecycle: 'started',
                clicks: 5,
            });
        });

        it('should send message for each updateState call', () => {
            autoconsent.updateState({ lifecycle: 'started' });
            autoconsent.updateState({ lifecycle: 'cmpDetected' });
            autoconsent.updateState({ lifecycle: 'done' });

            expect(sendMessageStub.callCount).to.equal(3);
        });
    });

    describe('lifecycle transitions', () => {
        it('should allow valid lifecycle transitions', () => {
            const transitions: Array<ConsentState['lifecycle']> = [
                'loading',
                'initialized',
                'started',
                'cmpDetected',
                'openPopupDetected',
                'runningOptOut',
                'done'
            ];

            transitions.forEach(lifecycle => {
                autoconsent.updateState({ lifecycle });
                expect(autoconsent.state.lifecycle).to.equal(lifecycle);
            });
        });

        it('should track heuristic patterns', () => {
            autoconsent.updateState({
                heuristicPatterns: ['cookie', 'consent'],
                heuristicSnippets: ['We use cookies', 'Consent required']
            });

            expect(autoconsent.state.heuristicPatterns).to.deep.equal(['cookie', 'consent']);
            expect(autoconsent.state.heuristicSnippets).to.deep.equal(['We use cookies', 'Consent required']);
        });
    });
});
