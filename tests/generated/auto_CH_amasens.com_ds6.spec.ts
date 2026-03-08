import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amasens.com_ds6', ['https://amasens.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
