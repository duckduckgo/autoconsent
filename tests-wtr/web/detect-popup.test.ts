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

describe('AutoConsent.detectPopup', () => {
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

    describe('popup detection', () => {
        it('should resolve with CMP when popup is detected', async () => {
            const mockCmp = createMockCMP({ name: 'cookiebot' });
            sinon.stub(autoconsent, 'waitForPopup').resolves(true);

            const result = await autoconsent.detectPopup(mockCmp);

            expect(result).to.equal(mockCmp);
        });

        it('should reject when popup is not detected', async () => {
            const mockCmp = createMockCMP();
            sinon.stub(autoconsent, 'waitForPopup').resolves(false);

            try {
                await autoconsent.detectPopup(mockCmp);
                expect.fail('Should have thrown');
            } catch (error) {
                expect(error).to.be.instanceOf(Error);
                expect((error as Error).message).to.equal('Popup is not shown');
            }
        });

        it('should add CMP name to detectedPopups state', async () => {
            const mockCmp = createMockCMP({ name: 'onetrust' });
            sinon.stub(autoconsent, 'waitForPopup').resolves(true);

            await autoconsent.detectPopup(mockCmp);

            expect(autoconsent.state.detectedPopups).to.include('onetrust');
        });

        it('should send popupFound message', async () => {
            const mockCmp = createMockCMP({ name: 'didomi' });
            sinon.stub(autoconsent, 'waitForPopup').resolves(true);

            await autoconsent.detectPopup(mockCmp);

            const popupMessage = sendMessageStub.getCalls().find((call) => call.args[0].type === 'popupFound');
            expect(popupMessage).to.exist;
            expect(popupMessage!.args[0].cmp).to.equal('didomi');
        });
    });

    describe('error handling', () => {
        it('should reject when waitForPopup throws error', async () => {
            const mockCmp = createMockCMP();
            sinon.stub(autoconsent, 'waitForPopup').rejects(new Error('Wait failed'));

            try {
                await autoconsent.detectPopup(mockCmp);
                expect.fail('Should have thrown');
            } catch (error) {
                expect(error).to.be.instanceOf(Error);
            }
        });
    });
});

describe('AutoConsent.detectPopups', () => {
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

    describe('multiple CMP detection', () => {
        it('should return empty array when no popups are detected', async () => {
            const mockCmp1 = createMockCMP({ name: 'cmp1' });
            const mockCmp2 = createMockCMP({ name: 'cmp2' });
            sinon.stub(autoconsent, 'detectPopup').rejects(new Error('No popup'));

            const handler = sinon.stub().resolves();
            const result = await autoconsent.detectPopups([mockCmp1, mockCmp2], handler);

            expect(result).to.be.an('array').that.is.empty;
        });

        it('should return CMPs with detected popups', async () => {
            const mockCmp1 = createMockCMP({ name: 'cmp1' });
            const mockCmp2 = createMockCMP({ name: 'cmp2' });

            const detectStub = sinon.stub(autoconsent, 'detectPopup');
            detectStub.withArgs(mockCmp1).resolves(mockCmp1);
            detectStub.withArgs(mockCmp2).resolves(mockCmp2);

            const handler = sinon.stub().resolves();
            const result = await autoconsent.detectPopups([mockCmp1, mockCmp2], handler);

            expect(result).to.have.lengthOf(2);
            expect(result.map((c) => c.name)).to.include('cmp1');
            expect(result.map((c) => c.name)).to.include('cmp2');
        });

        it('should call handler with first detected CMP', async () => {
            const mockCmp = createMockCMP({ name: 'first-detected' });
            sinon.stub(autoconsent, 'detectPopup').resolves(mockCmp);

            const handler = sinon.stub().resolves();
            await autoconsent.detectPopups([mockCmp], handler);

            expect(handler.calledOnce).to.be.true;
            expect(handler.firstCall.args[0]).to.equal(mockCmp);
        });

        it('should handle mix of successful and failed detections', async () => {
            const successCmp = createMockCMP({ name: 'success' });
            const failCmp = createMockCMP({ name: 'fail' });

            const detectStub = sinon.stub(autoconsent, 'detectPopup');
            detectStub.withArgs(successCmp).resolves(successCmp);
            detectStub.withArgs(failCmp).rejects(new Error('No popup'));

            const handler = sinon.stub().resolves();
            const result = await autoconsent.detectPopups([successCmp, failCmp], handler);

            expect(result).to.have.lengthOf(1);
            expect(result[0].name).to.equal('success');
        });
    });

    describe('handler invocation', () => {
        it('should not call handler when no popups detected', async () => {
            const mockCmp = createMockCMP();
            sinon.stub(autoconsent, 'detectPopup').rejects(new Error('No popup'));

            const handler = sinon.stub().resolves();
            await autoconsent.detectPopups([mockCmp], handler);

            expect(handler.called).to.be.false;
        });

        it('should call detectHeuristics after first popup appears', async () => {
            const mockCmp = createMockCMP();
            sinon.stub(autoconsent, 'detectPopup').resolves(mockCmp);
            const detectHeuristicsStub = sinon.stub(autoconsent, 'detectHeuristics');

            const handler = sinon.stub().resolves();
            await autoconsent.detectPopups([mockCmp], handler);

            expect(detectHeuristicsStub.calledOnce).to.be.true;
        });
    });
});
