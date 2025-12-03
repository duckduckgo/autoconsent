import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_merx.com_2nd', ['https://www.merx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
