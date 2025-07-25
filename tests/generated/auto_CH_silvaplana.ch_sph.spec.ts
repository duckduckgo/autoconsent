import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_silvaplana.ch_sph', ['https://silvaplana.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
