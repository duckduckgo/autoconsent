import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kptv.com_2fm', ['https://www.kptv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
