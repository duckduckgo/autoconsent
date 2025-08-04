import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_mci', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
