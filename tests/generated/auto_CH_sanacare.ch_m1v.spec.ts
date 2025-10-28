import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sanacare.ch_m1v', ['https://www.sanacare.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
