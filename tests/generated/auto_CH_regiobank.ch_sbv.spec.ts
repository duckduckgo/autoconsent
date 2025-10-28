import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_regiobank.ch_sbv', ['https://www.regiobank.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
