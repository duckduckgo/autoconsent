import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_agrola.ch_z0o', ['https://agrola.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
