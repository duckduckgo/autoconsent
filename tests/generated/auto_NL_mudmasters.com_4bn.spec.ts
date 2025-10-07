import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mudmasters.com_4bn', ['https://mudmasters.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
