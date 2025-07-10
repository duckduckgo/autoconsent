import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amerigas.com_cq4', ['https://www.amerigas.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
