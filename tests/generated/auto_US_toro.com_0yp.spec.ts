import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_toro.com_0yp', ['https://www.toro.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
