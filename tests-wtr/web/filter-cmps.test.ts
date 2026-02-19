import { expect } from 'chai';
import { filterCMPs } from '../../lib/web';
import { AutoCMP, Config } from '../../lib/types';
import { RunContext } from '../../lib/rules';

/**
 * Creates a mock CMP for testing filterCMPs function
 */
function createMockCMP(name: string, isCosmetic: boolean = false): AutoCMP {
    const runContext: RunContext = {};
    return {
        name,
        hasSelfTest: false,
        isIntermediate: false,
        isCosmetic,
        runContext,
        checkRunContext: () => true,
        checkFrameContext: () => true,
        hasMatchingUrlPattern: () => false,
        detectCmp: async () => false,
        detectPopup: async () => false,
        optOut: async () => false,
        optIn: async () => false,
        openCmp: async () => false,
        test: async () => false,
    };
}

/**
 * Creates a minimal Config object for testing
 */
function createTestConfig(overrides: Partial<Config> = {}): Config {
    return {
        enabled: true,
        autoAction: 'optOut',
        disabledCmps: [],
        enablePrehide: true,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        detectRetries: 5,
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

describe('filterCMPs', () => {
    // Test CMP rules
    const testCMPs: AutoCMP[] = [
        createMockCMP('cookiebot', false),
        createMockCMP('onetrust', false),
        createMockCMP('didomi', true),
        createMockCMP('cosmetic-banner', true),
        createMockCMP('auto_generated_rule', false),
        createMockCMP('auto_another_rule', false),
    ];

    describe('disabledCmps filtering', () => {
        it('should return all CMPs when disabledCmps is empty', () => {
            const config = createTestConfig({
                disabledCmps: [],
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(6);
        });

        it('should filter out single disabled CMP', () => {
            const config = createTestConfig({
                disabledCmps: ['cookiebot'],
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(5);
            expect(result.map(c => c.name)).to.not.include('cookiebot');
        });

        it('should filter out multiple disabled CMPs', () => {
            const config = createTestConfig({
                disabledCmps: ['cookiebot', 'onetrust', 'didomi'],
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(3);
            expect(result.map(c => c.name)).to.not.include('cookiebot');
            expect(result.map(c => c.name)).to.not.include('onetrust');
            expect(result.map(c => c.name)).to.not.include('didomi');
        });

        it('should ignore non-existent CMP names in disabledCmps', () => {
            const config = createTestConfig({
                disabledCmps: ['non-existent-cmp'],
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(6);
        });
    });

    describe('cosmetic rules filtering', () => {
        it('should include cosmetic CMPs when enableCosmeticRules is true', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);
            const cosmeticCmps = result.filter(c => c.isCosmetic);

            expect(cosmeticCmps).to.have.lengthOf(2);
            expect(cosmeticCmps.map(c => c.name)).to.include('didomi');
            expect(cosmeticCmps.map(c => c.name)).to.include('cosmetic-banner');
        });

        it('should exclude cosmetic CMPs when enableCosmeticRules is false', () => {
            const config = createTestConfig({
                enableCosmeticRules: false,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(4);
            expect(result.every(c => !c.isCosmetic)).to.be.true;
        });

        it('should keep non-cosmetic CMPs regardless of enableCosmeticRules', () => {
            const config = createTestConfig({
                enableCosmeticRules: false,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result.map(c => c.name)).to.include('cookiebot');
            expect(result.map(c => c.name)).to.include('onetrust');
        });
    });

    describe('generated rules filtering', () => {
        it('should include auto_ prefixed CMPs when enableGeneratedRules is true', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);
            const generatedCmps = result.filter(c => c.name.startsWith('auto_'));

            expect(generatedCmps).to.have.lengthOf(2);
        });

        it('should exclude auto_ prefixed CMPs when enableGeneratedRules is false', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: false,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(4);
            expect(result.every(c => !c.name.startsWith('auto_'))).to.be.true;
        });

        it('should not affect CMPs that do not start with auto_', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: false,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result.map(c => c.name)).to.include('cookiebot');
            expect(result.map(c => c.name)).to.include('onetrust');
        });
    });

    describe('combined filters', () => {
        it('should apply all filters together', () => {
            const config = createTestConfig({
                disabledCmps: ['cookiebot'],
                enableCosmeticRules: false,
                enableGeneratedRules: false,
            });

            const result = filterCMPs(testCMPs, config);

            // Should only have 'onetrust' left
            // - cookiebot: disabled
            // - didomi, cosmetic-banner: cosmetic
            // - auto_*: generated
            expect(result).to.have.lengthOf(1);
            expect(result[0].name).to.equal('onetrust');
        });

        it('should return empty array when all CMPs are filtered out', () => {
            const config = createTestConfig({
                disabledCmps: ['cookiebot', 'onetrust'],
                enableCosmeticRules: false,
                enableGeneratedRules: false,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result).to.have.lengthOf(0);
        });

        it('should handle CMP that is both cosmetic and disabled', () => {
            const config = createTestConfig({
                disabledCmps: ['didomi'],
                enableCosmeticRules: true, // cosmetic enabled, but didomi is disabled
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result.map(c => c.name)).to.not.include('didomi');
            expect(result.map(c => c.name)).to.include('cosmetic-banner');
        });

        it('should handle generated CMP that is also disabled', () => {
            const config = createTestConfig({
                disabledCmps: ['auto_generated_rule'],
                enableCosmeticRules: true,
                enableGeneratedRules: true, // generated enabled, but this one is disabled
            });

            const result = filterCMPs(testCMPs, config);

            expect(result.map(c => c.name)).to.not.include('auto_generated_rule');
            expect(result.map(c => c.name)).to.include('auto_another_rule');
        });
    });

    describe('edge cases', () => {
        it('should handle empty rules array', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs([], config);

            expect(result).to.have.lengthOf(0);
        });

        it('should be case-sensitive for CMP names', () => {
            const config = createTestConfig({
                disabledCmps: ['Cookiebot'], // capital C
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            // 'cookiebot' (lowercase) should NOT be filtered
            expect(result.map(c => c.name)).to.include('cookiebot');
        });

        it('should be case-sensitive for auto_ prefix', () => {
            const cmps: AutoCMP[] = [
                createMockCMP('Auto_uppercase', false),
                createMockCMP('AUTO_allcaps', false),
                createMockCMP('auto_lowercase', false),
            ];
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: false,
            });

            const result = filterCMPs(cmps, config);

            // Only 'auto_lowercase' should be filtered
            expect(result).to.have.lengthOf(2);
            expect(result.map(c => c.name)).to.include('Auto_uppercase');
            expect(result.map(c => c.name)).to.include('AUTO_allcaps');
        });

        it('should preserve original array order', () => {
            const config = createTestConfig({
                enableCosmeticRules: true,
                enableGeneratedRules: true,
            });

            const result = filterCMPs(testCMPs, config);

            expect(result[0].name).to.equal('cookiebot');
            expect(result[1].name).to.equal('onetrust');
        });

        it('should not mutate original array', () => {
            const originalLength = testCMPs.length;
            const config = createTestConfig({
                disabledCmps: ['cookiebot', 'onetrust'],
                enableCosmeticRules: false,
                enableGeneratedRules: false,
            });

            filterCMPs(testCMPs, config);

            expect(testCMPs).to.have.lengthOf(originalLength);
        });
    });
});
