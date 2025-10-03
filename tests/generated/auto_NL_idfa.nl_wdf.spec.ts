import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_idfa.nl_wdf', ['https://www.idfa.nl/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
