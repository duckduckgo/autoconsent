import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vw.com_joe', ['https://www.vw.com/en.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
