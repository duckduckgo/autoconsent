import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gameboost.com_w31', ['https://gameboost.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
