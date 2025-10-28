import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_domotec.ch_9tn', ['https://domotec.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
