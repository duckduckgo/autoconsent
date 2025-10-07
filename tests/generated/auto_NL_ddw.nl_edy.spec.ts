import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ddw.nl_edy', ['https://ddw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
