import { expect } from 'chai';
import sinon from 'sinon';
import AutoConsent from '../../lib/web';
import { Config } from '../../lib/types';
import { AutoConsentCMPRule } from '../../lib/rules';
import AutoConsentCMP from '../../lib/cmps/base';

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

/**
 * Creates a minimal declarative ruleset for testing
 */
function createTestRuleset(overrides: Partial<AutoConsentCMPRule> = {}): AutoConsentCMPRule {
    return {
        name: 'test-declarative-cmp',
        detectCmp: [],
        detectPopup: [],
        optOut: [],
        optIn: [],
        ...overrides,
    };
}

describe('AutoConsent.addDeclarativeCMP', () => {
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

    it('should add a rule with no minimumRuleStepVersion (defaults to 1)', () => {
        const rulesBefore = autoconsent.rules.length;
        const ruleset = createTestRuleset();

        autoconsent.addDeclarativeCMP(ruleset);

        expect(autoconsent.rules.length).to.equal(rulesBefore + 1);
    });

    it('should add a rule whose minimumRuleStepVersion equals the supported version', () => {
        const rulesBefore = autoconsent.rules.length;
        const ruleset = createTestRuleset({ minimumRuleStepVersion: 2 });

        autoconsent.addDeclarativeCMP(ruleset);

        expect(autoconsent.rules.length).to.equal(rulesBefore + 1);
    });

    it('should add a rule whose minimumRuleStepVersion is below the supported version', () => {
        const rulesBefore = autoconsent.rules.length;
        const ruleset = createTestRuleset({ minimumRuleStepVersion: 1 });

        autoconsent.addDeclarativeCMP(ruleset);

        expect(autoconsent.rules.length).to.equal(rulesBefore + 1);
    });

    it('should NOT add a rule whose minimumRuleStepVersion exceeds the supported version', () => {
        const rulesBefore = autoconsent.rules.length;
        const ruleset = createTestRuleset({ minimumRuleStepVersion: 3 });

        autoconsent.addDeclarativeCMP(ruleset);

        expect(autoconsent.rules.length).to.equal(rulesBefore);
    });

    it('should add an AutoConsentCMP instance carrying the original rule name', () => {
        const ruleset = createTestRuleset({ name: 'my-custom-cmp' });

        autoconsent.addDeclarativeCMP(ruleset);

        const added = autoconsent.rules.find((r) => r.name === 'my-custom-cmp');
        expect(added).to.exist;
        expect(added).to.be.instanceOf(AutoConsentCMP);
    });

    it('should use the default runContext when the rule does not specify one', () => {
        const ruleset = createTestRuleset({ name: 'no-run-context-cmp' });

        autoconsent.addDeclarativeCMP(ruleset);

        const added = autoconsent.rules.find((r) => r.name === 'no-run-context-cmp');
        expect(added?.runContext).to.deep.equal({ main: true, frame: false, urlPattern: '' });
    });

    it('should use the runContext provided by the rule when specified', () => {
        const ruleset = createTestRuleset({
            name: 'custom-run-context-cmp',
            runContext: { main: false, frame: true, urlPattern: 'example.com' },
        });

        autoconsent.addDeclarativeCMP(ruleset);

        const added = autoconsent.rules.find((r) => r.name === 'custom-run-context-cmp');
        expect(added?.runContext).to.deep.equal({ main: false, frame: true, urlPattern: 'example.com' });
    });
});
