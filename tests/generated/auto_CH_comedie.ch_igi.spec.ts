import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comedie.ch_igi', ['https://www.comedie.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
