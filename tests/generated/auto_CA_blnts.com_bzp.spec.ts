import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blnts.com_bzp', ['https://blnts.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
