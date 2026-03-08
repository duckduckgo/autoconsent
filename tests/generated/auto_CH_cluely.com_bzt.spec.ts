import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cluely.com_bzt', ['https://cluely.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
