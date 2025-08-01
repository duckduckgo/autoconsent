import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_primera.nl_dqk', ['https://www.primera.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
