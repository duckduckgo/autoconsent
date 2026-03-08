import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biofueralle.ch_nrv', ['https://biofueralle.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
