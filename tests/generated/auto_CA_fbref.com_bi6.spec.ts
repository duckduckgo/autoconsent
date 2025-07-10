import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fbref.com_bi6', ['https://fbref.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
