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

function createMockCMP(name: string, overrides: Partial<AutoCMP> = {}): AutoCMP {
    const runContext: RunContext = {};
    return {
        name,
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

describe('AutoConsent.detectPopups', () => {
    let sendMessageStub: sinon.SinonStub;
    let autoconsent: AutoConsent;

    beforeEach(() => {
        sendMessageStub = sinon.stub().resolves();
        autoconsent = new AutoConsent(sendMessageStub, createTestConfig(), null);
        sendMessageStub.resetHistory();
        // Stub waitForPopup so individual specs don't hit the 500ms ×
        // 10-retry default loop; we control popup visibility via cmp.detectPopup.
        sinon.stub(autoconsent, 'waitForPopup').callsFake(async (cmp: AutoCMP) => {
            try {
                return Boolean(await cmp.detectPopup());
            } catch {
                return false;
            }
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('returns CMPs whose popup is detected and skips ones that reject', async () => {
        const cmpA = createMockCMP('cmpA', { detectPopup: async () => true });
        const cmpB = createMockCMP('cmpB', {
            detectPopup: async () => {
                throw new Error('not visible');
            },
        });

        const onFirst = sinon.spy();
        const result = await autoconsent.detectPopups([cmpA, cmpB], onFirst);

        expect(result.map((c) => c.name)).to.deep.equal(['cmpA']);
        expect(onFirst.calledOnce).to.equal(true);
        expect(onFirst.firstCall.args[0]).to.equal(cmpA);
    });

    it('calls onFirstPopupAppears only once even when multiple popups are detected', async () => {
        const cmpA = createMockCMP('cmpA', { detectPopup: async () => true });
        const cmpB = createMockCMP('cmpB', { detectPopup: async () => true });
        const cmpC = createMockCMP('cmpC', { detectPopup: async () => true });

        const onFirst = sinon.spy();
        const result = await autoconsent.detectPopups([cmpA, cmpB, cmpC], onFirst);

        expect(result.length).to.equal(3);
        expect(onFirst.calledOnce).to.equal(true);
    });

    it('returns an empty list and does not call onFirstPopupAppears when no popup is open', async () => {
        const cmpA = createMockCMP('cmpA', { detectPopup: async () => false });
        const cmpB = createMockCMP('cmpB', { detectPopup: async () => false });

        const onFirst = sinon.spy();
        const result = await autoconsent.detectPopups([cmpA, cmpB], onFirst);

        expect(result).to.deep.equal([]);
        expect(onFirst.called).to.equal(false);
    });

    it('does not depend on Promise.any (works when polyfill replaces window.Promise)', async () => {
        // Simulate environments like Squarespace (via Zone.js) where `Promise`
        // is replaced with a polyfill that omits `Promise.any` (and may also
        // omit `Promise.allSettled`). We temporarily delete those methods to
        // ensure detectPopups still works.
        const originalAny = (Promise as any).any;
        const originalAllSettled = (Promise as any).allSettled;
        try {
            delete (Promise as any).any;
            delete (Promise as any).allSettled;

            const cmpA = createMockCMP('cmpA', { detectPopup: async () => true });
            const cmpB = createMockCMP('cmpB', {
                detectPopup: async () => {
                    throw new Error('not visible');
                },
            });

            const onFirst = sinon.spy();
            const result = await autoconsent.detectPopups([cmpA, cmpB], onFirst);

            expect(result.map((c) => c.name)).to.deep.equal(['cmpA']);
            expect(onFirst.calledOnce).to.equal(true);
        } finally {
            if (originalAny !== undefined) (Promise as any).any = originalAny;
            if (originalAllSettled !== undefined) (Promise as any).allSettled = originalAllSettled;
        }
    });
});
