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

describe('AutoConsent.doOptIn', () => {
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
            const result = await autoconsent.doOptIn();

            expect(result).to.be.false;
        });

        it('should update lifecycle to runningOptIn then optInFailed', async () => {
            await autoconsent.doOptIn();

            expect(autoconsent.state.lifecycle).to.equal('optInFailed');
        });

        it('should send optInResult message with cmp "none"', async () => {
            await autoconsent.doOptIn();

            const optInMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optInResult'
            );
            expect(optInMessage).to.exist;
            expect(optInMessage!.args[0].cmp).to.equal('none');
            expect(optInMessage!.args[0].result).to.be.false;
        });
    });

    describe('with foundCmp', () => {
        it('should call optIn on foundCmp', async () => {
            const mockCmp = createMockCMP();
            const optInSpy = sinon.spy(mockCmp, 'optIn');
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(optInSpy.calledOnce).to.be.true;
        });

        it('should return true when optIn succeeds', async () => {
            const mockCmp = createMockCMP({ optIn: async () => true });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doOptIn();

            expect(result).to.be.true;
        });

        it('should return false when optIn fails', async () => {
            const mockCmp = createMockCMP({ optIn: async () => false });
            autoconsent.foundCmp = mockCmp;

            const result = await autoconsent.doOptIn();

            expect(result).to.be.false;
        });

        it('should send optInResult with CMP name', async () => {
            const mockCmp = createMockCMP({ name: 'onetrust' });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const optInMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optInResult'
            );
            expect(optInMessage!.args[0].cmp).to.equal('onetrust');
        });

        it('should not schedule selfTest for optIn', async () => {
            const mockCmp = createMockCMP({ hasSelfTest: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const optInMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'optInResult'
            );
            // selfTest is only for optOut
            expect(optInMessage!.args[0].scheduleSelfTest).to.be.false;
        });
    });

    describe('autoconsentDone message', () => {
        it('should send autoconsentDone on success for non-intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.exist;
        });

        it('should not send autoconsentDone for intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.be.undefined;
        });

        it('should not send autoconsentDone on failure', async () => {
            const mockCmp = createMockCMP({ optIn: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage).to.be.undefined;
        });

        it('should include duration in autoconsentDone', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;
            autoconsent.state.startTime = Date.now() - 50;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].duration).to.be.a('number');
        });

        it('should include totalClicks in autoconsentDone', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;
            autoconsent.state.clicks = 3;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].totalClicks).to.equal(3);
        });

        it('should include isCosmetic flag in autoconsentDone', async () => {
            const mockCmp = createMockCMP({ isCosmetic: false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            const doneMessage = sendMessageStub.getCalls().find(
                call => call.args[0].type === 'autoconsentDone'
            );
            expect(doneMessage!.args[0].isCosmetic).to.be.false;
        });
    });

    describe('lifecycle transitions', () => {
        it('should set lifecycle to runningOptIn at start', async () => {
            const mockCmp = createMockCMP({
                optIn: async () => {
                    expect(autoconsent.state.lifecycle).to.equal('runningOptIn');
                    return true;
                }
            });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();
        });

        it('should set lifecycle to done on success', async () => {
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(autoconsent.state.lifecycle).to.equal('done');
        });

        it('should set lifecycle to optInSucceeded for intermediate CMP', async () => {
            const mockCmp = createMockCMP({ isIntermediate: true });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(autoconsent.state.lifecycle).to.equal('optInSucceeded');
        });

        it('should set lifecycle to optInFailed on failure', async () => {
            const mockCmp = createMockCMP({ optIn: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(autoconsent.state.lifecycle).to.equal('optInFailed');
        });
    });

    describe('focus management', () => {
        it('should save focus before optIn', async () => {
            const saveFocusSpy = sinon.spy(autoconsent, 'saveFocus');
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(saveFocusSpy.calledOnce).to.be.true;
        });

        it('should restore focus after optIn', async () => {
            const restoreFocusSpy = sinon.spy(autoconsent, 'restoreFocus');
            const mockCmp = createMockCMP();
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(restoreFocusSpy.calledOnce).to.be.true;
        });

        it('should restore focus even on failure', async () => {
            const restoreFocusSpy = sinon.spy(autoconsent, 'restoreFocus');
            const mockCmp = createMockCMP({ optIn: async () => false });
            autoconsent.foundCmp = mockCmp;

            await autoconsent.doOptIn();

            expect(restoreFocusSpy.calledOnce).to.be.true;
        });
    });
});
