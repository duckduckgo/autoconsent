import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klm.com_65w', ['https://www.klm.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
