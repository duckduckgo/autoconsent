import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kptv.com_nbn', ['https://www.kptv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
