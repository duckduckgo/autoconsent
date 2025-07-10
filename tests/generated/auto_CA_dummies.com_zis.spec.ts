import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dummies.com_zis', ['https://www.dummies.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
