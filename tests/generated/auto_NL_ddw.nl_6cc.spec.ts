import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ddw.nl_6cc', ['https://ddw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
