import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zitmaxx.nl_jiz', ['https://www.zitmaxx.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
