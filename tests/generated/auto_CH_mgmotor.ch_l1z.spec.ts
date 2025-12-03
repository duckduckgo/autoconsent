import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mgmotor.ch_l1z', ['https://www.mgmotor.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
