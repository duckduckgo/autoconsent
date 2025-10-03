import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mudmasters.com_mr5', ['https://mudmasters.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
