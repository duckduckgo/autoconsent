import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_l1c', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
