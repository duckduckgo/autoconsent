import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zgt.nl_x6f', ['https://www.zgt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
