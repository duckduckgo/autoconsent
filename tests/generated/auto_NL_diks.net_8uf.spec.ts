import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_8uf', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
