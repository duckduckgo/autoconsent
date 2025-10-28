import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nytimes.com_8q5', ['https://www.nytimes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
