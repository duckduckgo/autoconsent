import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comparea.ch_wte', ['https://comparea.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
