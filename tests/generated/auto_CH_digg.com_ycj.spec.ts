import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_digg.com_ycj', ['https://digg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
