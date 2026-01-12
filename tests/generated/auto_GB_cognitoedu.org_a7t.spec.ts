import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cognitoedu.org_a7t', ['https://cognitoedu.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
