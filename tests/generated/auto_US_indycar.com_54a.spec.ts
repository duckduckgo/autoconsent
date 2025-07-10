import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_indycar.com_54a', ['https://www.indycar.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
