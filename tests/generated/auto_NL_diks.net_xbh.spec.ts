import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diks.net_xbh', ['https://diks.net/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
