import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_merx.com_bzx', ['https://www.merx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
