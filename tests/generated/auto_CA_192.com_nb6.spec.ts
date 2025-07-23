import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_192.com_nb6', ['https://www.192.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
