import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_moaa.org_3w9', ['https://www.moaa.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
