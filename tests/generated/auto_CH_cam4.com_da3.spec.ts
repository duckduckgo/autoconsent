import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cam4.com_da3', ['https://www.cam4.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
