import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nm.org_0', ['https://www.nm.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
