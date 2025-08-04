import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unsplash.com_nlg', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
