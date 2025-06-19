import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_xpo.com_wdu', ['https://www.xpo.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
