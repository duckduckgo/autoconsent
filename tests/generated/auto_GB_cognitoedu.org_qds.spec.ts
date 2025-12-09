import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cognitoedu.org_qds', ['https://cognitoedu.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
