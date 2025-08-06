import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_peugeot.ch_cs2', ['https://www.peugeot.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
