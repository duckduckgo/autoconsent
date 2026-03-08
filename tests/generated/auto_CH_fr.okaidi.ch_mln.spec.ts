import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.okaidi.ch_mln', ['https://fr.okaidi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
