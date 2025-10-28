import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_netplus.ch_3lm', ['https://www.netplus.ch/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
