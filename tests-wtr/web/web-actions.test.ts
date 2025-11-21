import { expect } from '@esm-bundle/chai';
import AutoConsent from '../../lib/web';
import { Config, AutoCMP } from '../../lib/types';
import { BackgroundMessage } from '../../lib/messages';

// Mock message sender
const createMockSender = () => {
    const messages: any[] = [];
    return {
        sender: async (message: any) => {
            messages.push(message);
        },
        messages,
        clear: () => messages.splice(0, messages.length),
        getMessagesByType: (type: string) => messages.filter(m => m.type === type)
    };
};

// Basic config
const createConfig = (overrides: Partial<Config> = {}): Config => ({
    enabled: true,
    autoAction: null,
    disabledCmps: [],
    enablePrehide: false,
    enableCosmeticRules: true,
    enableGeneratedRules: true,
    detectRetries: 1,
    isMainWorld: false,
    prehideTimeout: 2000,
    enableFilterList: false,
    enableHeuristicDetection: false,
    visualTest: false,
    logs: {
        lifecycle: false,
        rulesteps: false,
        detectionsteps: false,
        evals: false,
        errors: false,
        messages: false,
        waits: false
    },
    ...overrides
});

// Mock CMP for testing opt-out/opt-in
class TestCMP implements AutoCMP {
    name: string;
    hasSelfTest = false;
    isIntermediate = false;
    isCosmetic = false;
    prehideSelectors?: string[];
    runContext = { urlPattern: '', main: true, frame: true };
    
    private _optOutResult = true;
    private _optInResult = true;

    constructor(name: string, options: {
        optOutResult?: boolean;
        optInResult?: boolean;
    } = {}) {
        this.name = name;
        this._optOutResult = options.optOutResult ?? true;
        this._optInResult = options.optInResult ?? true;
    }

    checkRunContext(): boolean { return true; }
    checkFrameContext(isTop: boolean): boolean { return true; }
    hasMatchingUrlPattern(): boolean { return false; }
    async detectCmp(): Promise<boolean> { return true; }
    async detectPopup(): Promise<boolean> { return true; }
    async optOut(): Promise<boolean> { return this._optOutResult; }
    async optIn(): Promise<boolean> { return this._optInResult; }
    async openCmp(): Promise<boolean> { return true; }
    async test(): Promise<boolean> { return true; }
}

describe('AutoConsent Web - Actions and Messages', () => {
    let mockSender: any;
    let autoConsent: AutoConsent;

    beforeEach(() => {
        mockSender = createMockSender();
        const config = createConfig();
        autoConsent = new AutoConsent(mockSender.sender, config);
    });

    describe('Opt-Out Actions', () => {
        it('should perform successful opt-out', async () => {
            const testCmp = new TestCMP('test-cmp', { optOutResult: true });
            autoConsent.foundCmp = testCmp;
            
            const result = await autoConsent.doOptOut();
            
            expect(result).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('done');
            
            const optOutMessages = mockSender.getMessagesByType('optOutResult');
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.true;
            expect(optOutMessages[0].cmp).to.equal('test-cmp');
            
            const doneMessages = mockSender.getMessagesByType('autoconsentDone');
            expect(doneMessages).to.have.length(1);
        });

        it('should handle failed opt-out', async () => {
            const testCmp = new TestCMP('test-cmp', { optOutResult: false });
            autoConsent.foundCmp = testCmp;
            
            const result = await autoConsent.doOptOut();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('optOutFailed');
            
            const optOutMessages = mockSender.getMessagesByType('optOutResult');
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.false;
        });

        it('should handle opt-out with no CMP', async () => {
            autoConsent.foundCmp = undefined;
            
            const result = await autoConsent.doOptOut();
            
            expect(result).to.be.false;
            
            const optOutMessages = mockSender.getMessagesByType('optOutResult');
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.false;
            expect(optOutMessages[0].cmp).to.equal('none');
        });
    });

    describe('Opt-In Actions', () => {
        it('should perform successful opt-in', async () => {
            const testCmp = new TestCMP('test-cmp', { optInResult: true });
            autoConsent.foundCmp = testCmp;
            
            const result = await autoConsent.doOptIn();
            
            expect(result).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('done');
            
            const optInMessages = mockSender.getMessagesByType('optInResult');
            expect(optInMessages).to.have.length(1);
            expect(optInMessages[0].result).to.be.true;
            expect(optInMessages[0].cmp).to.equal('test-cmp');
        });

        it('should handle failed opt-in', async () => {
            const testCmp = new TestCMP('test-cmp', { optInResult: false });
            autoConsent.foundCmp = testCmp;
            
            const result = await autoConsent.doOptIn();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('optInFailed');
        });
    });

    describe('Self-Test', () => {
        it('should perform self-test', async () => {
            const testCmp = new TestCMP('test-cmp');
            autoConsent.foundCmp = testCmp;
            
            const result = await autoConsent.doSelfTest();
            
            expect(result).to.be.true;
            expect(autoConsent.state.selfTest).to.be.true;
            
            const selfTestMessages = mockSender.getMessagesByType('selfTestResult');
            expect(selfTestMessages).to.have.length(1);
            expect(selfTestMessages[0].result).to.be.true;
            expect(selfTestMessages[0].cmp).to.equal('test-cmp');
        });

        it('should handle self-test with no CMP', async () => {
            autoConsent.foundCmp = undefined;
            
            const result = await autoConsent.doSelfTest();
            
            expect(result).to.be.false;
            
            const selfTestMessages = mockSender.getMessagesByType('selfTestResult');
            expect(selfTestMessages).to.have.length(1);
            expect(selfTestMessages[0].cmp).to.equal('none');
        });
    });

    describe('Message Handling', () => {
        it('should handle initResp message', async () => {
            // Create new instance without config to test initialization
            const uninitializedAutoConsent = new AutoConsent(mockSender.sender);
            
            const config = createConfig();
            const initMessage: BackgroundMessage = {
                type: 'initResp',
                config,
                rules: { autoconsent: [], consentomatic: {} }
            };
            
            await uninitializedAutoConsent.receiveMessageCallback(initMessage);
            
            expect(uninitializedAutoConsent.state.lifecycle).to.equal('initialized');
        });

        it('should handle optOut message', async () => {
            const testCmp = new TestCMP('test-cmp');
            autoConsent.foundCmp = testCmp;
            mockSender.clear();
            
            const optOutMessage: BackgroundMessage = { type: 'optOut' };
            
            await autoConsent.receiveMessageCallback(optOutMessage);
            
            const optOutMessages = mockSender.getMessagesByType('optOutResult');
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.true;
        });

        it('should handle optIn message', async () => {
            const testCmp = new TestCMP('test-cmp');
            autoConsent.foundCmp = testCmp;
            mockSender.clear();
            
            const optInMessage: BackgroundMessage = { type: 'optIn' };
            
            await autoConsent.receiveMessageCallback(optInMessage);
            
            const optInMessages = mockSender.getMessagesByType('optInResult');
            expect(optInMessages).to.have.length(1);
            expect(optInMessages[0].result).to.be.true;
        });

        it('should handle selfTest message', async () => {
            const testCmp = new TestCMP('test-cmp');
            autoConsent.foundCmp = testCmp;
            mockSender.clear();
            
            const selfTestMessage: BackgroundMessage = { type: 'selfTest' };
            
            await autoConsent.receiveMessageCallback(selfTestMessage);
            
            const selfTestMessages = mockSender.getMessagesByType('selfTestResult');
            expect(selfTestMessages).to.have.length(1);
            expect(selfTestMessages[0].result).to.be.true;
        });
    });

    describe('Popup Handling', () => {
        it('should handle popup with autoAction optOut', async () => {
            const config = createConfig({ autoAction: 'optOut' });
            autoConsent = new AutoConsent(mockSender.sender, config);
            
            const testCmp = new TestCMP('test-cmp', { optOutResult: true });
            
            const result = await autoConsent.handlePopup(testCmp);
            
            expect(result).to.be.true;
            expect(autoConsent.foundCmp).to.equal(testCmp);
        });

        it('should handle popup with autoAction optIn', async () => {
            const config = createConfig({ autoAction: 'optIn' });
            autoConsent = new AutoConsent(mockSender.sender, config);
            
            const testCmp = new TestCMP('test-cmp', { optInResult: true });
            
            const result = await autoConsent.handlePopup(testCmp);
            
            expect(result).to.be.true;
        });

        it('should wait for user action when autoAction is null', async () => {
            const config = createConfig({ autoAction: null });
            autoConsent = new AutoConsent(mockSender.sender, config);
            
            const testCmp = new TestCMP('test-cmp');
            
            const result = await autoConsent.handlePopup(testCmp);
            
            expect(result).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('openPopupDetected');
        });
    });

    describe('Lifecycle Management', () => {
        it('should handle complete detection and action flow', async () => {
            const config = createConfig({ autoAction: 'optOut' });
            autoConsent = new AutoConsent(mockSender.sender, config);
            
            const testCmp = new TestCMP('test-cmp', { optOutResult: true });
            testCmp.detectCmp = async () => true;
            testCmp.detectPopup = async () => true;
            
            autoConsent.rules = [testCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('done');
            expect(autoConsent.foundCmp?.name).to.equal('test-cmp');
        });

        it('should handle no CMP found scenario', async () => {
            const testCmp = new TestCMP('test-cmp');
            testCmp.detectCmp = async () => false;
            
            autoConsent.rules = [testCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('nothingDetected');
        });

        it('should handle CMP detected but no popup', async () => {
            const testCmp = new TestCMP('test-cmp');
            testCmp.detectCmp = async () => true;
            testCmp.detectPopup = async () => false;
            
            autoConsent.rules = [testCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.false;
        });
    });
});