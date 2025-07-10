import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amerigas.com_g1b', ['https://www.amerigas.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
