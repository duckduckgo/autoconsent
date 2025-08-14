import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_peugeot.ch_xqo', ['https://www.peugeot.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
