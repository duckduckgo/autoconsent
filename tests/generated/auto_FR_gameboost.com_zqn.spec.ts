import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gameboost.com_zqn', ['https://gameboost.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
