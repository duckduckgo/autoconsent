import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_enence.com_354', ['https://enence.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
