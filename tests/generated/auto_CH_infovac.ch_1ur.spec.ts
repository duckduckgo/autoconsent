import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_infovac.ch_1ur', ['https://www.infovac.ch/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
