import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_u4gm.com_vrx', ['https://www.u4gm.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
