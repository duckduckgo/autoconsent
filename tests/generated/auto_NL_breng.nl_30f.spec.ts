import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_breng.nl_30f', ['https://www.breng.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
