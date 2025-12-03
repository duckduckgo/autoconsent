import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tirerack.com_j7q', ['https://www.tirerack.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
