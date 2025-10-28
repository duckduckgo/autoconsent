import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tpf.ch_zde', ['https://www.tpf.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
