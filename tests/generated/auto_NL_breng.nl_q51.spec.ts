import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_breng.nl_q51', ['https://www.breng.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
