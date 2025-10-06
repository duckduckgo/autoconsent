import { expect } from '@esm-bundle/chai';
import AutoConsent from '../../lib/web';
import { Config, AutoCMP } from '../../lib/types';

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

// Failing CMP for testing error scenarios
class FailingCMP implements AutoCMP {
    name: string;
    hasSelfTest = false;
    isIntermediate = false;
    isCosmetic = false;
    prehideSelectors?: string[];
    runContext = { urlPattern: '', main: true, frame: true };

    constructor(name: string) {
        this.name = name;
    }

    checkRunContext(): boolean { return true; }
    checkFrameContext(isTop: boolean): boolean { return true; }
    hasMatchingUrlPattern(): boolean { return false; }

    async detectCmp(): Promise<boolean> {
        throw new Error('CMP detection failed');
    }

    async detectPopup(): Promise<boolean> {
        throw new Error('Popup detection failed');
    }

    async optOut(): Promise<boolean> {
        throw new Error('Opt-out failed');
    }

    async optIn(): Promise<boolean> {
        throw new Error('Opt-in failed');
    }

    async openCmp(): Promise<boolean> {
        throw new Error('Open CMP failed');
    }

    async test(): Promise<boolean> {
        throw new Error('Self-test failed');
    }
}

// Intermediate CMP for testing intermediate states
class IntermediateCMP implements AutoCMP {
    name: string;
    hasSelfTest = false;
    isIntermediate = true;  // This is the key difference
    isCosmetic = false;
    prehideSelectors?: string[];
    runContext = { urlPattern: '', main: true, frame: true };

    constructor(name: string) {
        this.name = name;
    }

    checkRunContext(): boolean { return true; }
    checkFrameContext(isTop: boolean): boolean { return true; }
    hasMatchingUrlPattern(): boolean { return false; }
    async detectCmp(): Promise<boolean> { return true; }
    async detectPopup(): Promise<boolean> { return true; }
    async optOut(): Promise<boolean> { return true; }
    async optIn(): Promise<boolean> { return true; }
    async openCmp(): Promise<boolean> { return true; }
    async test(): Promise<boolean> { return true; }
}

describe('AutoConsent Web - Edge Cases and Error Handling', () => {
    let mockSender: any;
    let autoConsent: AutoConsent;

    beforeEach(() => {
        mockSender = createMockSender();
        const config = createConfig();
        autoConsent = new AutoConsent(mockSender.sender, config);
    });

    describe('Error Handling', () => {
        it('should handle CMP detection errors gracefully', async () => {
            const failingCmp = new FailingCMP('failing-cmp');
            autoConsent.rules = [failingCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            expect(foundCmps).to.have.length(0);
            // Should not crash and should not send detection messages
            const detectedMessages = mockSender.getMessagesByType('cmpDetected');
            expect(detectedMessages).to.have.length(0);
        });

        it('should handle popup detection errors gracefully', async () => {
            const failingCmp = new FailingCMP('failing-cmp');
            
            try {
                await autoConsent.detectPopup(failingCmp);
                expect.fail('Should have thrown an error');
            } catch (error) {
                expect((error as Error).message).to.equal('Popup is not shown');
            }
        });

        it('should handle opt-out errors', async () => {
            const failingCmp = new FailingCMP('failing-cmp');
            autoConsent.foundCmp = failingCmp;
            
            // The doOptOut method should catch the error and return false
            const result = await autoConsent.doOptOut();
            
            // Since the CMP throws an error, it should be caught and treated as failure
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('optOutFailed');
        });

        it('should handle opt-in errors', async () => {
            const failingCmp = new FailingCMP('failing-cmp');
            autoConsent.foundCmp = failingCmp;
            
            const result = await autoConsent.doOptIn();
            
            expect(result).to.be.false;
            expect(autoConsent.state.lifecycle).to.equal('optInFailed');
        });

        it('should handle focus restoration errors gracefully', () => {
            // Create and focus an element
            const button = document.createElement('button');
            document.body.appendChild(button);
            button.focus();
            
            autoConsent.saveFocus();
            
            // Remove the element to cause an error during restoration
            document.body.removeChild(button);
            
            // Should not throw
            expect(() => autoConsent.restoreFocus()).to.not.throw();
        });
    });

    describe('Intermediate CMPs', () => {
        it('should not send done message for intermediate CMP', async () => {
            const intermediateCmp = new IntermediateCMP('intermediate-cmp');
            autoConsent.foundCmp = intermediateCmp;
            
            await autoConsent.doOptOut();
            
            expect(autoConsent.state.lifecycle).to.equal('optOutSucceeded');
            
            // Should not send autoconsentDone for intermediate CMPs
            const doneMessages = mockSender.getMessagesByType('autoconsentDone');
            expect(doneMessages).to.have.length(0);
        });

        it('should send done message for non-intermediate CMP', async () => {
            const regularCmp = new FailingCMP('regular-cmp'); // Reuse but override methods
            regularCmp.isIntermediate = false;
            regularCmp.optOut = async () => true;
            
            autoConsent.foundCmp = regularCmp;
            
            await autoConsent.doOptOut();
            
            expect(autoConsent.state.lifecycle).to.equal('done');
            
            const doneMessages = mockSender.getMessagesByType('autoconsentDone');
            expect(doneMessages).to.have.length(1);
        });
    });

    describe('Frame Context Handling', () => {
        it('should filter CMPs based on frame context', async () => {
            // Create CMP that only runs in top frame
            const topOnlyCmp = new FailingCMP('top-only');
            topOnlyCmp.checkFrameContext = (isTop: boolean) => isTop;
            topOnlyCmp.detectCmp = async () => true;
            
            // Create CMP that only runs in child frame
            const childOnlyCmp = new FailingCMP('child-only');
            childOnlyCmp.checkFrameContext = (isTop: boolean) => !isTop;
            childOnlyCmp.detectCmp = async () => true;
            
            autoConsent.rules = [topOnlyCmp, childOnlyCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            // Only the CMP that matches current frame context should be found
            // Since we're in top frame (window.top === window), only topOnlyCmp should be detected
            expect(foundCmps).to.have.length(1);
            expect(foundCmps[0].name).to.equal('top-only');
        });
    });

    describe('Run Context Handling', () => {
        it('should filter CMPs based on run context', async () => {
            const validContextCmp = new FailingCMP('valid-context');
            validContextCmp.checkRunContext = () => true;
            validContextCmp.detectCmp = async () => true;
            
            const invalidContextCmp = new FailingCMP('invalid-context');
            invalidContextCmp.checkRunContext = () => false;
            invalidContextCmp.detectCmp = async () => true;
            
            autoConsent.rules = [validContextCmp, invalidContextCmp];
            
            const foundCmps = await autoConsent.findCmp(1);
            
            // Only CMP with valid run context should be found
            expect(foundCmps).to.have.length(1);
            expect(foundCmps[0].name).to.equal('valid-context');
        });
    });

    describe('Multiple CMP Detection', () => {
        it('should report error when multiple CMPs have popups', async () => {
            const config = createConfig({ autoAction: 'optOut' });
            autoConsent = new AutoConsent(mockSender.sender, config);
            
            const cmp1 = new FailingCMP('cmp1');
            cmp1.detectCmp = async () => true;
            cmp1.detectPopup = async () => true;
            cmp1.optOut = async () => true;
            
            const cmp2 = new FailingCMP('cmp2');
            cmp2.detectCmp = async () => true;
            cmp2.detectPopup = async () => true;
            cmp2.optOut = async () => true;
            
            autoConsent.rules = [cmp1, cmp2];
            
            await autoConsent._start();
            
            const errorMessages = mockSender.getMessagesByType('autoconsentError');
            expect(errorMessages).to.have.length(1);
            expect(errorMessages[0].details.msg).to.include('Found multiple CMPs');
            expect(errorMessages[0].details.cmps).to.deep.equal(['cmp1', 'cmp2']);
        });
    });

    describe('State Consistency', () => {
        it('should maintain correct state during lifecycle', () => {
            expect(autoConsent.state.lifecycle).to.equal('initialized');
            expect(autoConsent.state.findCmpAttempts).to.equal(0);
            expect(autoConsent.state.detectedCmps).to.deep.equal([]);
            expect(autoConsent.state.detectedPopups).to.deep.equal([]);
            expect(autoConsent.state.prehideOn).to.be.false;
            expect(autoConsent.state.cosmeticFiltersOn).to.be.false;
        });

        it('should update findCmpAttempts counter', async () => {
            const cmp = new FailingCMP('test-cmp');
            cmp.detectCmp = async () => false;
            autoConsent.rules = [cmp];
            
            await autoConsent.findCmp(1);
            
            expect(autoConsent.state.findCmpAttempts).to.equal(1);
        });

        it('should track detected CMPs in state', async () => {
            const cmp = new FailingCMP('detected-cmp');
            cmp.detectCmp = async () => true;
            autoConsent.rules = [cmp];
            
            await autoConsent.findCmp(1);
            
            expect(autoConsent.state.detectedCmps).to.include('detected-cmp');
        });
    });

    describe('Filter List Fallback', () => {
        it('should call filterListFallback when no CMPs found', async () => {
            let fallbackCalled = false;
            autoConsent.filterListFallback = () => {
                fallbackCalled = true;
                return false;
            };
            
            autoConsent.rules = [];
            
            await autoConsent._start();
            
            expect(fallbackCalled).to.be.true;
            expect(autoConsent.state.lifecycle).to.equal('nothingDetected');
        });
    });
});