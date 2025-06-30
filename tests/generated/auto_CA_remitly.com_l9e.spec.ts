import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_remitly.com_l9e', ['https://www.remitly.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
