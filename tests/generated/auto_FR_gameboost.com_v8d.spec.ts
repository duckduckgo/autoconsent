import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gameboost.com_v8d', ['https://gameboost.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
