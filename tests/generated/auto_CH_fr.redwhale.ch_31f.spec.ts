import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.redwhale.ch_31f', ['https://fr.redwhale.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
