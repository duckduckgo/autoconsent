import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_slegg.com_xsy', ['https://www.slegg.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
