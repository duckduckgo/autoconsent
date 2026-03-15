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

describe('AutoConsent.doOptOut', () => {
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
            const result = await autoconsent.doOptOut();

            expect(result).to.be.false;
        });

        it('should update lifecycle to runningOptOut then optOutFailed', async () => {
            await autoconsent.doOptOut();

            expect(autoconsent.state.lifecycle).to.equal('optOutFailed');
        });

        it('should send optOutResult message with cmp "none"', async () => {
            await autoconsent.doOptOut();

            const optOutMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optOutResult'
            );
            expect(optOutMessage).to.exist;
            expect(optOutMessage!.args[0].cmp).to.equal('none');
            expect(optOutMessage!.args[0].result).to.be.false;
        });
    });

    describe('with foundCmp', () => {
        it('should call optOut on foundCmp', async () => {
            const mockCmp = createMockCMP();
            const optOutSpy = sinon.spy(mockCmp, 'optOut');
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(optOutSpy.calledOnce).to.be.true;
        });

        it('should return true when optOut succeeds', async () => {
            const mockCmp = createMockCMP({ optOut: async () => true });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doOptOut();

            expect(result).to.be.true;
        });

        it('should return false when optOut fails', async () => {
            const mockCmp = createMockCMP({ optOut: async () => false });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doOptOut();

            expect(result).to.be.false;
        });

        it('should send optOutResult with CMP name', async () => {
            const mockCmp = createMockCMP({ name: 'cookiebot' });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const optOutMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optOutResult'
            );
            expect(optOutMessage!.args[0].cmp).to.equal('cookiebot');
        });

        it('should include scheduleSelfTest when CMP has selfTest', async () => {
            const mockCmp = createMockCMP({ hasSelfTest: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const optOutMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optOutResult'
            );
            expect(optOutMessage!.args[0].scheduleSelfTest).to.be.true;
        });

        it('should not schedule selfTest when CMP has no selfTest', async () => {
            const mockCmp = createMockCMP({ hasSelfTest: false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const optOutMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optOutResult'
            );
            expect(optOutMessage!.args[0].scheduleSelfTest).to.be.false;
        });
    });

    describe('autoconsentDone message', () => {
        it('should send autoconsentDone on success for non-intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.exist;
        });

        it('should not send autoconsentDone for intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.be.undefined;
        });

        it('should not send autoconsentDone on failure', async () => {
            const mockCmp = createMockCMP({ optOut: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.be.undefined;
        });

        it('should include duration in autoconsentDone', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;
            autoconsent.state.startTime = Date.now() - 100;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].duration).to.be.a('number');
            expect(doneMessage!.args[0].duration).to.be.at.least(0);
        });

        it('should include totalClicks in autoconsentDone', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;
            autoconsent.state.clicks = 5;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].totalClicks).to.equal(5);
        });

        it('should include isCosmetic flag in autoconsentDone', async () => {
            const mockCmp = createMockCMP({ isCosmetic: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].isCosmetic).to.be.true;
        });
    });

    describe('lifecycle transitions', () => {
        it('should set lifecycle to runningOptOut at start', async () => {
            const mockCmp = createMockCMP({
                optOut: async () => {
                    // Check lifecycle during optOut execution
                    expect(autoconsent.state.lifecycle).to.equal('runningOptOut');
                    return true;
                }
            });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();
        });

        it('should set lifecycle to done on success', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(autoconsent.state.lifecycle).to.equal('done');
        });

        it('should set lifecycle to optOutSucceeded for intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(autoconsent.state.lifecycle).to.equal('optOutSucceeded');
        });

        it('should set lifecycle to optOutFailed on failure', async () => {
            const mockCmp = createMockCMP({ optOut: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(autoconsent.state.lifecycle).to.equal('optOutFailed');
        });
    });

    describe('focus management', () => {
        it('should save focus before optOut', async () => {
            const saveFocusSpy = sinon.spy(autoconsent, 'saveFocus');
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(saveFocusSpy.calledOnce).to.be.true;
        });

        it('should restore focus after optOut', async () => {
            const restoreFocusSpy = sinon.spy(autoconsent, 'restoreFocus');
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(restoreFocusSpy.calledOnce).to.be.true;
        });

        it('should restore focus even on failure', async () => {
            const restoreFocusSpy = sinon.spy(autoconsent, 'restoreFocus');
            const mockCmp = createMockCMP({ optOut: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptOut();

            expect(restoreFocusSpy.calledOnce).to.be.true;
        });
    });
});
