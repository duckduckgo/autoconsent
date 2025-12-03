import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zitmaxx.nl_h51', ['https://www.zitmaxx.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
