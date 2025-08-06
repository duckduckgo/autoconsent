import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wur.nl_vio', ['https://www.wur.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
