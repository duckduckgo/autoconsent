import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_remitly.com_mm4', ['https://www.remitly.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
