/// <reference types="mocha" />
import { expect } from '@esm-bundle/chai';
import AutoConsent from '../../lib/web';
import { Config, MessageSender, AutoCMP, RuleBundle, ConsentState } from '../../lib/types';
import { ContentScriptMessage, BackgroundMessage, InitMessage, DetectedMessage, OptOutResultMessage, OptInResultMessage, SelfTestResultMessage } from '../../lib/messages';

// Mock message sender for testing
class MockMessageSender {
    public messages: ContentScriptMessage[] = [];
    public messageSender: MessageSender;

    constructor() {
        this.messageSender = async (message: ContentScriptMessage) => {
            this.messages.push(message);
        };
    }

    getLastMessage(): ContentScriptMessage | undefined {
        return this.messages[this.messages.length - 1];
    }

    getMessagesByType<T extends ContentScriptMessage>(type: T['type']): T[] {
        return this.messages.filter(msg => msg.type === type) as T[];
    }

    getInitMessages(): InitMessage[] {
        return this.messages.filter(msg => msg.type === 'init') as InitMessage[];
    }

    getDetectedMessages(): DetectedMessage[] {
        return this.messages.filter(msg => msg.type === 'cmpDetected') as DetectedMessage[];
    }

    getOptOutMessages(): OptOutResultMessage[] {
        return this.messages.filter(msg => msg.type === 'optOutResult') as OptOutResultMessage[];
    }

    getOptInMessages(): OptInResultMessage[] {
        return this.messages.filter(msg => msg.type === 'optInResult') as OptInResultMessage[];
    }

    getSelfTestMessages(): SelfTestResultMessage[] {
        return this.messages.filter(msg => msg.type === 'selfTestResult') as SelfTestResultMessage[];
    }

    clear() {
        this.messages = [];
    }
}

// Mock CMP for testing
class MockCMP implements AutoCMP {
    name: string;
    hasSelfTest = false;
    isIntermediate = false;
    isCosmetic = false;
    prehideSelectors?: string[];
    runContext = { urlPattern: '', main: true, frame: true };

    private _shouldDetect = false;
    private _shouldShowPopup = false;
    private _optOutResult = true;
    private _optInResult = true;

    constructor(name: string, options: Partial<{
        shouldDetect: boolean;
        shouldShowPopup: boolean;
        optOutResult: boolean;
        optInResult: boolean;
        isCosmetic: boolean;
        prehideSelectors: string[];
    }> = {}) {
        this.name = name;
        this._shouldDetect = options.shouldDetect ?? false;
        this._shouldShowPopup = options.shouldShowPopup ?? false;
        this._optOutResult = options.optOutResult ?? true;
        this._optInResult = options.optInResult ?? true;
        this.isCosmetic = options.isCosmetic ?? false;
        this.prehideSelectors = options.prehideSelectors;
    }

    checkRunContext(): boolean {
        return true;
    }

    checkFrameContext(isTop: boolean): boolean {
        return true;
    }

    hasMatchingUrlPattern(): boolean {
        return !!this.runContext.urlPattern;
    }

    async detectCmp(): Promise<boolean> {
        return this._shouldDetect;
    }

    async detectPopup(): Promise<boolean> {
        return this._shouldShowPopup;
    }

    async optOut(): Promise<boolean> {
        return this._optOutResult;
    }

    async optIn(): Promise<boolean> {
        return this._optInResult;
    }

    async openCmp(): Promise<boolean> {
        return true;
    }

    async test(): Promise<boolean> {
        return true;
    }

    // Test helper methods
    setDetectionResult(shouldDetect: boolean) {
        this._shouldDetect = shouldDetect;
    }

    setPopupResult(shouldShowPopup: boolean) {
        this._shouldShowPopup = shouldShowPopup;
    }

    setOptOutResult(result: boolean) {
        this._optOutResult = result;
    }
}

// Test utilities
function createMockConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: true,
        autoAction: null,
        disabledCmps: [],
        enablePrehide: true,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 3,
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
    };
}

function createMockRules(overrides: Partial<RuleBundle> = {}): RuleBundle {
    return {
        autoconsent: [],
        consentomatic: {},
        ...overrides
    };
}

// Main test suite
describe('AutoConsent Web', () => {
    let mockMessageSender: MockMessageSender;
    let autoConsent: AutoConsent;

    beforeEach(() => {
        mockMessageSender = new MockMessageSender();
        // Clear any existing DOM elements
        document.querySelectorAll('.autoconsent-prehide').forEach(el => el.remove());
    });

    afterEach(() => {
        // Clean up any prehide styles
        document.querySelectorAll('.autoconsent-prehide').forEach(el => el.remove());
    });

    describe('Constructor and Initialization', () => {
        it('should create AutoConsent instance without config', () => {
            autoConsent = new AutoConsent(mockMessageSender.messageSender);
            
            expect(autoConsent).to.be.instanceOf(AutoConsent);
            expect(autoConsent.state.lifecycle).to.equal('waitingForInitResponse');
            
            const initMessages = mockMessageSender.getInitMessages();
            expect(initMessages).to.have.length(1);
            expect(initMessages[0].url).to.equal(window.location.href);
        });

        it('should create AutoConsent instance with config', () => {
            const config = createMockConfig();
            const rules = createMockRules();
            
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config, rules);
            
            expect(autoConsent.state.lifecycle).to.equal('initialized');
            expect(autoConsent.config).to.deep.equal(config);
        });

        it('should throw error when accessing config before initialization', () => {
            autoConsent = new AutoConsent(mockMessageSender.messageSender);
            
            expect(() => autoConsent.config).to.throw('AutoConsent is not initialized yet');
        });

        it('should handle disabled config', () => {
            const config = createMockConfig({ enabled: false });
            
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            expect(autoConsent.state.lifecycle).to.equal('initialized');
        });
    });

    describe('CMP Detection', () => {
        beforeEach(() => {
            const config = createMockConfig({ detectRetries: 1 });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
        });

        it('should detect CMPs when available', async () => {
            const mockCmp = new MockCMP('test-cmp', { shouldDetect: true });
            autoConsent.rules = [mockCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            expect(foundCmps).to.have.length(1);
            expect(foundCmps[0].name).to.equal('test-cmp');
            
            const detectedMessages = mockMessageSender.getDetectedMessages();
            expect(detectedMessages).to.have.length(1);
        });

        it('should return empty array when no CMPs found', async () => {
            const mockCmp = new MockCMP('test-cmp', { shouldDetect: false });
            autoConsent.rules = [mockCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            expect(foundCmps).to.have.length(0);
        });

        it('should prioritize site-specific rules', async () => {
            const genericCmp = new MockCMP('generic', { shouldDetect: true });
            const siteSpecificCmp = new MockCMP('site-specific', { shouldDetect: true });
            siteSpecificCmp.runContext.urlPattern = 'example.com';
            
            // Mock hasMatchingUrlPattern for site-specific CMP
            siteSpecificCmp.hasMatchingUrlPattern = () => true;
            
            autoConsent.rules = [genericCmp, siteSpecificCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            expect(foundCmps).to.have.length(2);
            // Site-specific should be detected first
            const detectedMessages = mockMessageSender.getDetectedMessages();
            expect(detectedMessages[0].cmp).to.equal('site-specific');
        });

        it('should filter CMPs based on config', () => {
            const config = createMockConfig({ 
                disabledCmps: ['disabled-cmp'],
                enableCosmeticRules: false,
                enableGeneratedRules: false
            });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            const enabledCmp = new MockCMP('enabled-cmp');
            const disabledCmp = new MockCMP('disabled-cmp');
            const cosmeticCmp = new MockCMP('cosmetic-cmp', { isCosmetic: true });
            const generatedCmp = new MockCMP('auto_generated');
            
            const originalRules = [enabledCmp, disabledCmp, cosmeticCmp, generatedCmp];
            autoConsent.rules = originalRules;
            
            // Trigger filtering through initialization
            autoConsent.initialize(config, null);
            
            expect(autoConsent.rules).to.have.length(1);
            expect(autoConsent.rules[0].name).to.equal('enabled-cmp');
        });
    });

    describe('Popup Detection and Handling', () => {
        beforeEach(() => {
            const config = createMockConfig({ autoAction: 'optOut' });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
        });

        it('should detect popup and handle opt-out', async () => {
            const mockCmp = new MockCMP('test-cmp', { 
                shouldDetect: true, 
                shouldShowPopup: true,
                optOutResult: true 
            });
            autoConsent.rules = [mockCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.true;
            expect(autoConsent.foundCmp?.name).to.equal('test-cmp');
            expect(autoConsent.state.lifecycle).to.equal('done');
            
            const optOutMessages = mockMessageSender.getOptOutMessages();
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.true;
        });

        it('should handle opt-in when configured', async () => {
            const config = createMockConfig({ autoAction: 'optIn' });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            const mockCmp = new MockCMP('test-cmp', { 
                shouldDetect: true, 
                shouldShowPopup: true,
                optInResult: true 
            });
            autoConsent.rules = [mockCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.true;
            
            const optInMessages = mockMessageSender.getOptInMessages();
            expect(optInMessages).to.have.length(1);
            expect(optInMessages[0].result).to.be.true;
        });

        it('should handle multiple popups detected', async () => {
            const mockCmp1 = new MockCMP('cmp1', { 
                shouldDetect: true, 
                shouldShowPopup: true 
            });
            const mockCmp2 = new MockCMP('cmp2', { 
                shouldDetect: true, 
                shouldShowPopup: true 
            });
            autoConsent.rules = [mockCmp1, mockCmp2];
            
            await autoConsent._start();
            
            const errorMessages = mockMessageSender.getMessagesByType('autoconsentError');
            expect(errorMessages).to.have.length(1);
            expect(errorMessages[0].details.msg).to.include('Found multiple CMPs');
        });

        it('should wait for user action when autoAction is null', async () => {
            const config = createMockConfig({ autoAction: null });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            const mockCmp = new MockCMP('test-cmp', { 
                shouldDetect: true, 
                shouldShowPopup: true 
            });
            autoConsent.rules = [mockCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('openPopupDetected');
        });
    });

    describe('Focus Management', () => {
        beforeEach(() => {
            const config = createMockConfig();
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
        });

        it('should save and restore focus', () => {
            // Create a focusable element
            const button = document.createElement('button');
            button.id = 'test-focus';
            document.body.appendChild(button);
            button.focus();
            
            expect(document.activeElement).to.equal(button);
            
            autoConsent.saveFocus();
            
            // Blur the element
            button.blur();
            expect(document.activeElement).not.to.equal(button);
            
            autoConsent.restoreFocus();
            
            // Focus should be restored
            expect(document.activeElement).to.equal(button);
            
            // Clean up
            document.body.removeChild(button);
        });

        it('should handle focus restoration gracefully when element is removed', () => {
            const button = document.createElement('button');
            document.body.appendChild(button);
            button.focus();
            
            autoConsent.saveFocus();
            document.body.removeChild(button);
            
            // Should not throw error
            expect(() => autoConsent.restoreFocus()).to.not.throw();
        });
    });

    describe('State Management', () => {
        beforeEach(() => {
            const config = createMockConfig();
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            mockMessageSender.clear();
        });

        it('should update state and send report message', () => {
            const stateChange: Partial<ConsentState> = {
                lifecycle: 'cmpDetected',
                findCmpAttempts: 5
            };
            
            autoConsent.updateState(stateChange);
            
            expect(autoConsent.state.lifecycle).to.equal('cmpDetected');
            expect(autoConsent.state.findCmpAttempts).to.equal(5);
            
            const reportMessages = mockMessageSender.getMessagesByType('report');
            expect(reportMessages).to.have.length(1);
            expect(reportMessages[0].state.lifecycle).to.equal('cmpDetected');
        });

        it('should include correct metadata in state reports', () => {
            autoConsent.updateState({ lifecycle: 'started' });
            
            const reportMessage = mockMessageSender.getLastMessage();
            expect(reportMessage?.type).to.equal('report');
            
            if (reportMessage?.type === 'report') {
                expect(reportMessage.instanceId).to.equal(autoConsent.id);
                expect(reportMessage.url).to.equal(window.location.href);
                expect(reportMessage.mainFrame).to.equal(window.top === window.self);
            }
        });
    });

    describe('Prehiding', () => {
        beforeEach(() => {
            const config = createMockConfig({ enablePrehide: true });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
        });

        it('should prehide elements when enabled', () => {
            const mockCmp = new MockCMP('test-cmp', {
                prehideSelectors: ['#prehide-target']
            });
            autoConsent.rules = [mockCmp];
            
            const result = autoConsent.prehideElements();
            
            expect(result).to.be.true;
            expect(autoConsent.state.prehideOn).to.be.true;
            
            // Check if prehide style is applied
            const prehideStyle = document.querySelector('.autoconsent-prehide');
            expect(prehideStyle).to.exist;
        });

        it('should undo prehiding', () => {
            autoConsent.prehideElements();
            expect(autoConsent.state.prehideOn).to.be.true;
            
            autoConsent.undoPrehide();
            
            expect(autoConsent.state.prehideOn).to.be.false;
        });

        it('should not prehide when disabled', () => {
            const config = createMockConfig({ enablePrehide: false });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            expect(autoConsent.shouldPrehide).to.be.false;
        });

        it('should not prehide during visual tests', () => {
            const config = createMockConfig({ 
                enablePrehide: true, 
                visualTest: true 
            });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            expect(autoConsent.shouldPrehide).to.be.false;
        });
    });

    describe('Message Handling', () => {
        beforeEach(() => {
            const config = createMockConfig();
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            mockMessageSender.clear();
        });

        it('should handle initResp message', async () => {
            // Create new instance without config
            autoConsent = new AutoConsent(mockMessageSender.messageSender);
            
            const config = createMockConfig();
            const rules = createMockRules();
            
            const initRespMessage: BackgroundMessage = {
                type: 'initResp',
                config,
                rules
            };
            
            await autoConsent.receiveMessageCallback(initRespMessage);
            
            expect(autoConsent.state.lifecycle).to.equal('initialized');
        });

        it('should handle optOut message', async () => {
            const mockCmp = new MockCMP('test-cmp', { optOutResult: true });
            autoConsent.foundCmp = mockCmp;
            
            const optOutMessage: BackgroundMessage = {
                type: 'optOut'
            };
            
            await autoConsent.receiveMessageCallback(optOutMessage);
            
            const optOutMessages = mockMessageSender.getOptOutMessages();
            expect(optOutMessages).to.have.length(1);
            expect(optOutMessages[0].result).to.be.true;
        });

        it('should handle optIn message', async () => {
            const mockCmp = new MockCMP('test-cmp', { optInResult: true });
            autoConsent.foundCmp = mockCmp;
            
            const optInMessage: BackgroundMessage = {
                type: 'optIn'
            };
            
            await autoConsent.receiveMessageCallback(optInMessage);
            
            const optInMessages = mockMessageSender.getOptInMessages();
            expect(optInMessages).to.have.length(1);
            expect(optInMessages[0].result).to.be.true;
        });

        it('should handle selfTest message', async () => {
            const mockCmp = new MockCMP('test-cmp');
            autoConsent.foundCmp = mockCmp;
            
            const selfTestMessage: BackgroundMessage = {
                type: 'selfTest'
            };
            
            await autoConsent.receiveMessageCallback(selfTestMessage);
            
            const selfTestMessages = mockMessageSender.getSelfTestMessages();
            expect(selfTestMessages).to.have.length(1);
            expect(selfTestMessages[0].result).to.be.true;
        });
    });

    describe('Edge Cases and Error Handling', () => {
        beforeEach(() => {
            const config = createMockConfig();
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
        });

        it('should handle CMP detection errors gracefully', async () => {
            const failingCmp = new MockCMP('failing-cmp');
            failingCmp.detectCmp = async () => {
                throw new Error('Detection failed');
            };
            
            autoConsent.rules = [failingCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            expect(foundCmps).to.have.length(0);
        });

        it('should handle popup detection errors gracefully', async () => {
            const failingCmp = new MockCMP('failing-cmp');
            failingCmp.detectPopup = async () => {
                throw new Error('Popup detection failed');
            };
            
            const result = await autoConsent.detectPopup(failingCmp).catch(() => null);
            
            expect(result).to.be.null;
        });

        it('should handle opt-out failure', async () => {
            const config = createMockConfig({ autoAction: 'optOut' });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            const mockCmp = new MockCMP('test-cmp', { 
                shouldDetect: true, 
                shouldShowPopup: true,
                optOutResult: false 
            });
            autoConsent.rules = [mockCmp];
            
            const result = await autoConsent._start();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('optOutFailed');
        });

        it('should handle no CMP found scenario', async () => {
            const result = await autoConsent._start();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('nothingDetected');
        });

        it('should handle DOM not ready during prehide', (done) => {
            // Mock document.documentElement as null
            const originalDocumentElement = document.documentElement;
            Object.defineProperty(document, 'documentElement', {
                value: null,
                configurable: true
            });

            // Mock readyState as loading
            Object.defineProperty(document, 'readyState', {
                value: 'loading',
                configurable: true
            });

            const config = createMockConfig({ enablePrehide: true });
            autoConsent = new AutoConsent(mockMessageSender.messageSender, config);
            
            // Restore document.documentElement after a short delay
            setTimeout(() => {
                Object.defineProperty(document, 'documentElement', {
                    value: originalDocumentElement,
                    configurable: true
                });
                
                // Simulate DOMContentLoaded
                window.dispatchEvent(new Event('DOMContentLoaded'));
                
                // Give it time to process
                setTimeout(() => {
                    expect(autoConsent.state.prehideOn).to.be.true;
                    done();
                }, 10);
            }, 10);
        });
    });
});