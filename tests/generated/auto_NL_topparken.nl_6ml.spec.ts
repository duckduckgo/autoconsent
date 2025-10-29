import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_topparken.nl_6ml', ['https://www.topparken.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
