import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dealabs.com_ork', ['https://www.dealabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
