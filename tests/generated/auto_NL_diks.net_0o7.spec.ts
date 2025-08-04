import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_0o7', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
