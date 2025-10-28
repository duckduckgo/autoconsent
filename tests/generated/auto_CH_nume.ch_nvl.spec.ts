import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nume.ch_nvl', ['https://www.nume.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
