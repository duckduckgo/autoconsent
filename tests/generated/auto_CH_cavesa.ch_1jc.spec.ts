import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cavesa.ch_1jc', ['https://www.cavesa.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
