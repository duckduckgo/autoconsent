import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cbsnews.com_h1k', ['https://www.cbsnews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
