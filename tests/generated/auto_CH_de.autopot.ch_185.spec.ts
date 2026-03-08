import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.autopot.ch_185', ['https://de.autopot.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
