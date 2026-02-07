import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { AutoCMP, Config } from '../../lib/types';
import { RunContext } from '../../lib/rules';

/**
 * Creates a minimal Config object for testing
 */
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

/**
 * Creates a mock CMP for testing
 */
function createMockCMP(overrides: Partial<AutoCMP> = {}): AutoCMP {
    const runContext: RunContext = {};
    return {
        name: 'test-cmp',
        hasSelfTest: true,
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

describe('AutoConsent.doSelfTest', () => {
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

    describe('without foundCmp', () => {
        it('should return false when no CMP is found', async () => {
            const result = await autoconsent.doSelfTest();

            expect(result).to.be.false;
        });

        it('should update selfTest state to false', async () => {
            await autoconsent.doSelfTest();

            expect(autoconsent.state.selfTest).to.be.false;
        });

        it('should send selfTestResult message with cmp "none"', async () => {
            await autoconsent.doSelfTest();

            const testMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'selfTestResult'
            );
            expect(testMessage).to.exist;
            expect(testMessage!.args[0].cmp).to.equal('none');
            expect(testMessage!.args[0].result).to.be.false;
        });
    });

    describe('with foundCmp', () => {
        it('should call test on foundCmp', async () => {
            const mockCmp = createMockCMP();
            const testSpy = sinon.spy(mockCmp, 'test');
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            expect(testSpy.calledOnce).to.be.true;
        });

        it('should return true when test succeeds', async () => {
            const mockCmp = createMockCMP({ test: async () => true });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doSelfTest();

            expect(result).to.be.true;
        });

        it('should return false when test fails', async () => {
            const mockCmp = createMockCMP({ test: async () => false });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doSelfTest();

            expect(result).to.be.false;
        });

        it('should update selfTest state to true on success', async () => {
            const mockCmp = createMockCMP({ test: async () => true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            expect(autoconsent.state.selfTest).to.be.true;
        });

        it('should update selfTest state to false on failure', async () => {
            const mockCmp = createMockCMP({ test: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            expect(autoconsent.state.selfTest).to.be.false;
        });
    });

    describe('selfTestResult message', () => {
        it('should send selfTestResult with CMP name', async () => {
            const mockCmp = createMockCMP({ name: 'didomi' });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            const testMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'selfTestResult'
            );
            expect(testMessage!.args[0].cmp).to.equal('didomi');
        });

        it('should include result in selfTestResult', async () => {
            const mockCmp = createMockCMP({ test: async () => true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            const testMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'selfTestResult'
            );
            expect(testMessage!.args[0].result).to.be.true;
        });

        it('should include URL in selfTestResult', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();

            const testMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'selfTestResult'
            );
            expect(testMessage!.args[0].url).to.be.a('string');
        });
    });

    describe('multiple selfTests', () => {
        it('should allow running selfTest multiple times', async () => {
            const mockCmp = createMockCMP({ test: async () => true });
            autoconsent.foundCmp = mockCmp;

            const result1 = await autoconsent.doSelfTest();
            const result2 = await autoconsent.doSelfTest();

            expect(result1).to.be.true;
            expect(result2).to.be.true;
        });

        it('should update state on each selfTest run', async () => {
            let testResult = true;
            const mockCmp = createMockCMP({
                test: async () => testResult
            });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doSelfTest();
            expect(autoconsent.state.selfTest).to.be.true;

            testResult = false;
            await autoconsent.doSelfTest();
            expect(autoconsent.state.selfTest).to.be.false;
        });
    });
});
