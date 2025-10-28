import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_staefa.ch_iij', ['https://www.staefa.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
