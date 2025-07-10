import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_issuu.com_pne', ['https://issuu.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
