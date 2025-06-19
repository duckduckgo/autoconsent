import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_spirit.com_sb2', ['https://www.spirit.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
