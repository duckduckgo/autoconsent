import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blnts.com_v88', ['https://blnts.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
