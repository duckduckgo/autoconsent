import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { Config } from '../../lib/types';

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

describe('AutoConsent.receiveMessageCallback', () => {
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

    describe('optIn message', () => {
        it('should call doOptIn when receiving optIn message', async () => {
            const doOptInStub = sinon.stub(autoconsent, 'doOptIn').resolves(true);

            await autoconsent.receiveMessageCallback({ type: 'optIn' });

            expect(doOptInStub.calledOnce).to.be.true;
        });

        it('should handle optIn even without foundCmp', async () => {
            await autoconsent.receiveMessageCallback({ type: 'optIn' });

            // Should update lifecycle to runningOptIn
            expect(autoconsent.state.lifecycle).to.equal('optInFailed');
        });
    });

    describe('optOut message', () => {
        it('should call doOptOut when receiving optOut message', async () => {
            const doOptOutStub = sinon.stub(autoconsent, 'doOptOut').resolves(true);

            await autoconsent.receiveMessageCallback({ type: 'optOut' });

            expect(doOptOutStub.calledOnce).to.be.true;
        });

        it('should handle optOut even without foundCmp', async () => {
            await autoconsent.receiveMessageCallback({ type: 'optOut' });

            // Should update lifecycle to optOutFailed since no CMP found
            expect(autoconsent.state.lifecycle).to.equal('optOutFailed');
        });
    });

    describe('selfTest message', () => {
        it('should call doSelfTest when receiving selfTest message', async () => {
            const doSelfTestStub = sinon.stub(autoconsent, 'doSelfTest').resolves(true);

            await autoconsent.receiveMessageCallback({ type: 'selfTest' });

            expect(doSelfTestStub.calledOnce).to.be.true;
        });

        it('should handle selfTest without foundCmp', async () => {
            await autoconsent.receiveMessageCallback({ type: 'selfTest' });

            // selfTest should be false when no CMP
            expect(autoconsent.state.selfTest).to.be.false;
        });

        it('should send selfTestResult message', async () => {
            await autoconsent.receiveMessageCallback({ type: 'selfTest' });

            const selfTestMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'selfTestResult'
            );
            expect(selfTestMessage).to.exist;
            expect(selfTestMessage!.args[0].result).to.be.false;
            expect(selfTestMessage!.args[0].cmp).to.equal('none');
        });
    });

    describe('initResp message', () => {
        it('should call initialize with config from message', async () => {
            const initializeSpy = sinon.spy(autoconsent, 'initialize');
            const newConfig = createTestConfig({ enabled: true });

            await autoconsent.receiveMessageCallback({
                type: 'initResp',
                config: newConfig,
                rules: null
            });

            expect(initializeSpy.calledOnce).to.be.true;
            expect(initializeSpy.firstCall.args[0]).to.deep.include({ enabled: true });
        });

        it('should pass rules to initialize', async () => {
            const initializeSpy = sinon.spy(autoconsent, 'initialize');
            const rules = { autoconsent: [], consentomatic: {} };

            await autoconsent.receiveMessageCallback({
                type: 'initResp',
                config: createTestConfig(),
                rules
            });

            expect(initializeSpy.firstCall.args[1]).to.deep.equal(rules);
        });
    });

    describe('message logging', () => {
        it('should not log messages when logs.messages is false', async () => {
            const consoleSpy = sinon.spy(console, 'log');

            await autoconsent.receiveMessageCallback({ type: 'optOut' });

            const loggedMessage = consoleSpy.getCalls().find(
                call => call.args[0] === 'received from background'
            );
            expect(loggedMessage).to.be.undefined;
        });

        it('should log messages when logs.messages is true', async () => {
            const consoleSpy = sinon.spy(console, 'log');
            const config = createTestConfig({
                logs: {
                    lifecycle: false,
                    rulesteps: false,
                    detectionsteps: false,
                    evals: false,
                    errors: false,
                    messages: true,
                    waits: false,
                }
            });
            autoconsent = new AutoConsent(sendMessageStub, config, null);

            await autoconsent.receiveMessageCallback({ type: 'optOut' });

            const loggedMessage = consoleSpy.getCalls().find(
                call => call.args[0] === 'received from background'
            );
            expect(loggedMessage).to.exist;
        });
    });

    describe('unknown message types', () => {
        it('should handle unknown message type gracefully', async () => {
            // Should not throw
            await autoconsent.receiveMessageCallback({ type: 'unknownType' } as any);
        });
    });
});
