import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_s-bb.nl_4gm', ['https://www.s-bb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
