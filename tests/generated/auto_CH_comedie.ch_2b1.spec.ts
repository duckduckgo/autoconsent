import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comedie.ch_2b1', ['https://www.comedie.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
