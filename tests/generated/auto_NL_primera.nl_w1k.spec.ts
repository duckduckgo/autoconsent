import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_primera.nl_w1k', ['https://www.primera.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
