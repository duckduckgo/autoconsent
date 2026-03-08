import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_altaone.org_lkk', ['https://altaone.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
