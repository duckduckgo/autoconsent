import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unsplash.com_yzx', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
