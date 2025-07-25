import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lush.com_pkp', ['https://www.lush.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
