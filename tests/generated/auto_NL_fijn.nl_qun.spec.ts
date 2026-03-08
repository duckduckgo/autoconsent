import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fijn.nl_qun', ['https://fijn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
