import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bs-sommeri.ch_f6q', ['https://bs-sommeri.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
