import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sanacare.ch_dp5', ['https://www.sanacare.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
