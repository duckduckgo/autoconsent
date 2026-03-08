import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_desinfecta.ch_33a', ['https://desinfecta.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
