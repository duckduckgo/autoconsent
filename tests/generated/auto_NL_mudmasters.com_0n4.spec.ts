import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mudmasters.com_0n4', ['https://mudmasters.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
