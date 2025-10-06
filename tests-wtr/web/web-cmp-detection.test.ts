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

// Mock CMP implementation
class TestCMP implements AutoCMP {
    name: string;
    hasSelfTest = false;
    isIntermediate = false;
    isCosmetic = false;
    prehideSelectors?: string[];
    runContext = { urlPattern: '', main: true, frame: true };
    
    private _shouldDetect = false;
    private _shouldShowPopup = false;
    private _optOutResult = true;

    constructor(name: string, options: {
        shouldDetect?: boolean;
        shouldShowPopup?: boolean;
        optOutResult?: boolean;
        isCosmetic?: boolean;
        urlPattern?: string;
    } = {}) {
        this.name = name;
        this._shouldDetect = options.shouldDetect ?? false;
        this._shouldShowPopup = options.shouldShowPopup ?? false;
        this._optOutResult = options.optOutResult ?? true;
        this.isCosmetic = options.isCosmetic ?? false;
        if (options.urlPattern) {
            this.runContext.urlPattern = options.urlPattern;
        }
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
        return true;
    }

    async openCmp(): Promise<boolean> {
        return true;
    }

    async test(): Promise<boolean> {
        return true;
    }
}

describe('AutoConsent Web - CMP Detection', () => {
    let mockSender: any;
    let autoConsent: AutoConsent;

    beforeEach(() => {
        mockSender = createMockSender();
        const config = createConfig();
        autoConsent = new AutoConsent(mockSender.sender, config);
    });

    it('should detect CMPs correctly', async () => {
        const testCmp = new TestCMP('test-cmp', { shouldDetect: true });
        autoConsent.rules = [testCmp];
        
        const foundCmps = await autoConsent.findCmp(1);
        
        expect(foundCmps).to.have.length(1);
        expect(foundCmps[0].name).to.equal('test-cmp');
        
        const detectedMessages = mockSender.getMessagesByType('cmpDetected');
        expect(detectedMessages).to.have.length(1);
        expect(detectedMessages[0].cmp).to.equal('test-cmp');
    });

    it('should return empty array when no CMPs detected', async () => {
        const testCmp = new TestCMP('test-cmp', { shouldDetect: false });
        autoConsent.rules = [testCmp];
        
        const foundCmps = await autoConsent.findCmp(1);
        
        expect(foundCmps).to.have.length(0);
    });

    it('should prioritize site-specific rules', async () => {
        const genericCmp = new TestCMP('generic', { shouldDetect: true });
        const siteSpecificCmp = new TestCMP('site-specific', { 
            shouldDetect: true, 
            urlPattern: 'example.com' 
        });
        
        autoConsent.rules = [genericCmp, siteSpecificCmp];
        
        const foundCmps = await autoConsent.findCmp(1);
        
        expect(foundCmps).to.have.length(2);
    });

    it('should filter CMPs based on config', () => {
        const config = createConfig({
            disabledCmps: ['disabled-cmp'],
            enableCosmeticRules: false,
            enableGeneratedRules: false
        });
        
        const enabledCmp = new TestCMP('enabled-cmp');
        const disabledCmp = new TestCMP('disabled-cmp');
        const cosmeticCmp = new TestCMP('cosmetic-cmp', { isCosmetic: true });
        const generatedCmp = new TestCMP('auto_generated');
        
        // Create a new instance with the restrictive config
        const restrictiveAutoConsent = new AutoConsent(mockSender.sender, config);
        
        // Set up the rules before filtering
        const originalRules = [enabledCmp, disabledCmp, cosmeticCmp, generatedCmp];
        restrictiveAutoConsent.rules = originalRules;
        
        // Initialize to trigger filtering
        restrictiveAutoConsent.initialize(config, null);
        
        expect(restrictiveAutoConsent.rules).to.have.length(1);
        expect(restrictiveAutoConsent.rules[0].name).to.equal('enabled-cmp');
    });

    it('should handle CMP detection errors gracefully', async () => {
        const errorCmp = new TestCMP('error-cmp');
        errorCmp.detectCmp = async () => {
            throw new Error('Detection error');
        };
        
        autoConsent.rules = [errorCmp];
        
        const foundCmps = await autoConsent.findCmp(1);
        
        expect(foundCmps).to.have.length(0);
    });

    it('should detect popups correctly', async () => {
        const testCmp = new TestCMP('test-cmp', { 
            shouldDetect: true, 
            shouldShowPopup: true 
        });
        
        const popup = await autoConsent.detectPopup(testCmp);
        
        expect(popup).to.equal(testCmp);
        expect(autoConsent.state.detectedPopups).to.include('test-cmp');
        
        const popupMessages = mockSender.getMessagesByType('popupFound');
        expect(popupMessages).to.have.length(1);
        expect(popupMessages[0].cmp).to.equal('test-cmp');
    });

    it('should fail popup detection when popup not shown', async () => {
        const testCmp = new TestCMP('test-cmp', { 
            shouldDetect: true, 
            shouldShowPopup: false 
        });
        
        try {
            await autoConsent.detectPopup(testCmp);
            expect.fail('Should have thrown an error');
        } catch (error) {
            expect((error as Error).message).to.equal('Popup is not shown');
        }
    });

    it('should handle multiple popups', async () => {
        const cmp1 = new TestCMP('cmp1', { 
            shouldDetect: true, 
            shouldShowPopup: true 
        });
        const cmp2 = new TestCMP('cmp2', { 
            shouldDetect: true, 
            shouldShowPopup: true 
        });
        
        const cmps = [cmp1, cmp2];
        const detectedPopups = await autoConsent.detectPopups(cmps, async () => {});
        
        expect(detectedPopups).to.have.length(2);
        expect(detectedPopups.map(c => c.name)).to.include.members(['cmp1', 'cmp2']);
    });

    it('should wait for popup with retries', async () => {
        const testCmp = new TestCMP('test-cmp');
        let attempts = 0;
        
        testCmp.detectPopup = async () => {
            attempts++;
            return attempts >= 3; // Return true on third attempt
        };
        
        const result = await autoConsent.waitForPopup(testCmp, 5, 10);
        
        expect(result).to.be.true;
        expect(attempts).to.be.greaterThan(1);
    });

    it('should timeout when waiting for popup', async () => {
        const testCmp = new TestCMP('test-cmp', { shouldShowPopup: false });
        
        const result = await autoConsent.waitForPopup(testCmp, 1, 10);
        
        expect(result).to.be.false;
    });
});