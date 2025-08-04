import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_vx6', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
