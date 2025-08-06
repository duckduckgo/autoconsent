import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_opel.ch_uw7', ['https://www.opel.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
