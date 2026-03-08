import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_coopuqam.com_8td', ['https://coopuqam.com/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
