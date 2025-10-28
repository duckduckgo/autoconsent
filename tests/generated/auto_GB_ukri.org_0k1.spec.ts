import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ukri.org_0k1', ['https://www.ukri.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
