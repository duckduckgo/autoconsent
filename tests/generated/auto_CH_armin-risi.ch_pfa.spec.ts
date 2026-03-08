import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_armin-risi.ch_pfa', ['https://armin-risi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
