import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ddw.nl_n4z', ['https://ddw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
