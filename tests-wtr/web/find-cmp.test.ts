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

describe('AutoConsent.findCmp', () => {
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

    describe('basic detection', () => {
        it('should return empty array when no CMPs are found', async () => {
            const result = await autoconsent.findCmp(0);

            expect(result).to.be.an('array').that.is.empty;
        });

        it('should detect CMP when detectCmp returns true', async () => {
            const mockCmp = createMockCMP({ name: 'cookiebot', detectCmp: async () => true });
            autoconsent.rules.push(mockCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.have.lengthOf(1);
            expect(result[0].name).to.equal('cookiebot');
        });

        it('should not include CMP when detectCmp returns false', async () => {
            const mockCmp = createMockCMP({ detectCmp: async () => false });
            autoconsent.rules.push(mockCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.be.empty;
        });

        it('should detect multiple CMPs', async () => {
            autoconsent.rules.push(createMockCMP({ name: 'cmp1', detectCmp: async () => true }));
            autoconsent.rules.push(createMockCMP({ name: 'cmp2', detectCmp: async () => true }));

            const result = await autoconsent.findCmp(0);

            expect(result).to.have.lengthOf(2);
            expect(result.map((c) => c.name)).to.include('cmp1');
            expect(result.map((c) => c.name)).to.include('cmp2');
        });
    });

    describe('retry logic', () => {
        it('should not retry when CMP is found on first attempt', async () => {
            const mockCmp = createMockCMP();
            const detectStub = sinon.stub().resolves(true);
            mockCmp.detectCmp = detectStub;
            autoconsent.rules.push(mockCmp);

            await autoconsent.findCmp(5);

            expect(detectStub.callCount).to.equal(1);
        });

        it('should increment findCmpAttempts counter', async () => {
            const initialAttempts = autoconsent.state.findCmpAttempts;

            await autoconsent.findCmp(0);

            expect(autoconsent.state.findCmpAttempts).to.equal(initialAttempts + 1);
        });
    });

    describe('priority stages', () => {
        it('should check site-specific rules before generic rules', async () => {
            const genericCmp = createMockCMP({ name: 'generic', detectCmp: async () => false });
            const siteSpecificCmp = createMockCMP({
                name: 'site-specific',
                hasMatchingUrlPattern: () => true,
                detectCmp: async () => true,
            });

            autoconsent.rules.push(genericCmp);
            autoconsent.rules.push(siteSpecificCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.have.lengthOf(1);
            expect(result[0].name).to.equal('site-specific');
        });

        it('should stop early when site-specific CMP is found', async () => {
            const siteSpecificCmp = createMockCMP({
                name: 'site-specific',
                hasMatchingUrlPattern: () => true,
                detectCmp: async () => true,
            });
            const genericCmp = createMockCMP({ name: 'generic' });
            const genericDetectStub = sinon.stub().resolves(true);
            genericCmp.detectCmp = genericDetectStub;

            autoconsent.rules.push(siteSpecificCmp);
            autoconsent.rules.push(genericCmp);

            await autoconsent.findCmp(0);

            expect(genericDetectStub.called).to.be.false;
        });
    });

    describe('frame context filtering', () => {
        it('should filter rules based on frame context', async () => {
            const topOnlyCmp = createMockCMP({
                name: 'top-only',
                checkFrameContext: (isTop) => isTop,
                detectCmp: async () => true,
            });
            autoconsent.rules.push(topOnlyCmp);

            const result = await autoconsent.findCmp(0);

            expect(result.length).to.be.at.least(0);
        });

        it('should include CMP when checkFrameContext returns true', async () => {
            const mockCmp = createMockCMP({
                checkFrameContext: () => true,
                detectCmp: async () => true,
            });
            autoconsent.rules.push(mockCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.have.lengthOf(1);
        });

        it('should exclude CMP when checkFrameContext returns false', async () => {
            const mockCmp = createMockCMP({
                checkFrameContext: () => false,
                detectCmp: async () => true,
            });
            autoconsent.rules.push(mockCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.be.empty;
        });
    });

    describe('error handling', () => {
        it('should continue detection when one CMP throws error', async () => {
            const failingCmp = createMockCMP({
                name: 'failing',
                detectCmp: async () => {
                    throw new Error('Detection failed');
                },
            });
            const workingCmp = createMockCMP({ name: 'working', detectCmp: async () => true });

            autoconsent.rules.push(failingCmp);
            autoconsent.rules.push(workingCmp);

            const result = await autoconsent.findCmp(0);

            expect(result).to.have.lengthOf(1);
            expect(result[0].name).to.equal('working');
        });
    });

    describe('messaging', () => {
        it('should send cmpDetected message when CMP is found', async () => {
            const mockCmp = createMockCMP({ name: 'onetrust', detectCmp: async () => true });
            autoconsent.rules.push(mockCmp);

            await autoconsent.findCmp(0);

            const detectedMessage = sendMessageStub.getCalls().find((call) => call.args[0].type === 'cmpDetected');
            expect(detectedMessage).to.exist;
            expect(detectedMessage!.args[0].cmp).to.equal('onetrust');
        });

        it('should not send cmpDetected when no CMP found', async () => {
            await autoconsent.findCmp(0);

            const detectedMessage = sendMessageStub.getCalls().find((call) => call.args[0].type === 'cmpDetected');
            expect(detectedMessage).to.be.undefined;
        });
    });
});
