import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_alz.org_2fi', ['https://www.alz.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
