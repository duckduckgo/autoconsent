import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_honens.com_yzv', ['https://www.honens.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
