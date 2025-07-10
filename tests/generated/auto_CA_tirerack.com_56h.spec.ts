import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tirerack.com_56h', ['https://www.tirerack.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
