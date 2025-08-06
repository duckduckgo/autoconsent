import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unsplash.com_kid', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
