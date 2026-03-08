import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.spartoo.ch_69x', ['https://de.spartoo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
