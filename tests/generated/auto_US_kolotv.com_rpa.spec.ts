import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kolotv.com_rpa', ['https://www.kolotv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
