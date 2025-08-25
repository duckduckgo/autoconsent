import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unsplash.com_15t', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
