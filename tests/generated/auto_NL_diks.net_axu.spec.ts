import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_axu', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
