import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bm-geneve.ch_ms0', ['https://www.bm-geneve.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
