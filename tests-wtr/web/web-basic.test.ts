import { expect } from '@esm-bundle/chai';
import AutoConsent from '../../lib/web';
import { Config } from '../../lib/types';

// Simple mock message sender
const createMockSender = () => {
    const messages: any[] = [];
    return {
        sender: async (message: any) => {
            messages.push(message);
        },
        messages,
        getLastMessage: () => messages[messages.length - 1],
        clear: () => messages.splice(0, messages.length)
    };
};

// Basic config for testing
const createConfig = (overrides: Partial<Config> = {}): Config => ({
    enabled: true,
    autoAction: null,
    disabledCmps: [],
    enablePrehide: true,
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

describe('AutoConsent Web - Basic Functionality', () => {
    let mockSender: any;

    beforeEach(() => {
        mockSender = createMockSender();
    });

    it('should create AutoConsent instance without config', () => {
        const autoConsent = new AutoConsent(mockSender.sender);
        
        expect(autoConsent).to.be.instanceOf(AutoConsent);
        expect(autoConsent.state.lifecycle).to.equal('waitingForInitResponse');
    });

    it('should create AutoConsent instance with config', () => {
        const config = createConfig();
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        expect(autoConsent.state.lifecycle).to.equal('initialized');
        expect(autoConsent.config.enabled).to.be.true;
    });

    it('should throw error when accessing config before initialization', () => {
        const autoConsent = new AutoConsent(mockSender.sender);
        
        expect(() => autoConsent.config).to.throw('AutoConsent is not initialized yet');
    });

    it('should handle disabled config correctly', () => {
        const config = createConfig({ enabled: false });
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        expect(autoConsent.config.enabled).to.be.false;
    });

    it('should update state correctly', () => {
        const config = createConfig();
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        autoConsent.updateState({ lifecycle: 'started' });
        
        expect(autoConsent.state.lifecycle).to.equal('started');
        expect(mockSender.messages.length).to.be.greaterThan(0);
        
        const lastMessage = mockSender.getLastMessage();
        expect(lastMessage.type).to.equal('report');
        expect(lastMessage.state.lifecycle).to.equal('started');
    });

    it('should have correct shouldPrehide logic', () => {
        const enabledConfig = createConfig({ enablePrehide: true, visualTest: false });
        const visualTestConfig = createConfig({ enablePrehide: true, visualTest: true });
        const disabledConfig = createConfig({ enablePrehide: false });
        
        const autoConsentEnabled = new AutoConsent(mockSender.sender, enabledConfig);
        const autoConsentVisual = new AutoConsent(mockSender.sender, visualTestConfig);
        const autoConsentDisabled = new AutoConsent(mockSender.sender, disabledConfig);
        
        expect(autoConsentEnabled.shouldPrehide).to.be.true;
        expect(autoConsentVisual.shouldPrehide).to.be.false;
        expect(autoConsentDisabled.shouldPrehide).to.be.false;
    });

    it('should manage focus correctly', () => {
        const config = createConfig();
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        // Create a test button
        const button = document.createElement('button');
        button.id = 'test-focus-button';
        document.body.appendChild(button);
        
        // Focus the button
        button.focus();
        expect(document.activeElement).to.equal(button);
        
        // Save focus
        autoConsent.saveFocus();
        
        // Blur the button
        button.blur();
        expect(document.activeElement).not.to.equal(button);
        
        // Restore focus
        autoConsent.restoreFocus();
        expect(document.activeElement).to.equal(button);
        
        // Clean up
        document.body.removeChild(button);
    });

    it('should handle prehiding elements', () => {
        const config = createConfig({ enablePrehide: true });
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        // Mock a CMP with prehide selectors
        const mockCMP = {
            name: 'test-cmp',
            prehideSelectors: ['#prehide-target'],
            checkRunContext: () => true,
            hasSelfTest: false,
            isIntermediate: false,
            isCosmetic: false,
            runContext: { urlPattern: '', main: true, frame: true },
            checkFrameContext: () => true,
            hasMatchingUrlPattern: () => false,
            detectCmp: async () => false,
            detectPopup: async () => false,
            optOut: async () => false,
            optIn: async () => false,
            openCmp: async () => false,
            test: async () => false
        };
        
        autoConsent.rules = [mockCMP];
        
        const result = autoConsent.prehideElements();
        expect(result).to.be.true;
        expect(autoConsent.state.prehideOn).to.be.true;
        
        // Check if prehide styles are applied
        const prehideStyle = document.querySelector('style.autoconsent-prehide');
        expect(prehideStyle).to.exist;
        
        // Test undo prehide
        autoConsent.undoPrehide();
        expect(autoConsent.state.prehideOn).to.be.false;
    });

    it('should generate unique IDs', () => {
        const autoConsent1 = new AutoConsent(mockSender.sender);
        const autoConsent2 = new AutoConsent(mockSender.sender);
        
        expect(autoConsent1.id).to.not.equal(autoConsent2.id);
        expect(autoConsent1.id).to.be.a('string');
        expect(autoConsent1.id.length).to.be.greaterThan(0);
    });

    it('should handle message sending correctly', () => {
        const config = createConfig();
        const autoConsent = new AutoConsent(mockSender.sender, config);
        
        mockSender.clear();
        
        autoConsent.updateState({ lifecycle: 'cmpDetected' });
        
        expect(mockSender.messages).to.have.length(1);
        const message = mockSender.messages[0];
        
        expect(message.type).to.equal('report');
        expect(message.instanceId).to.equal(autoConsent.id);
        expect(message.url).to.equal(window.location.href);
        expect(message.mainFrame).to.equal(window.top === window.self);
        expect(message.state).to.deep.include({ lifecycle: 'cmpDetected' });
    });
});