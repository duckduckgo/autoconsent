import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_nws', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
