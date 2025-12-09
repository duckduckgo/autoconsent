import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sanacare.ch_qpy', ['https://www.sanacare.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
