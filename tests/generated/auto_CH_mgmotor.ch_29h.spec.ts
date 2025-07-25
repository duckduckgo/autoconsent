import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mgmotor.ch_29h', ['https://www.mgmotor.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
