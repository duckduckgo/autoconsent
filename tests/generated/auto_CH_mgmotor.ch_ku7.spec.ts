import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mgmotor.ch_ku7', ['https://www.mgmotor.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
