import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zgt.nl_23h', ['https://www.zgt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
