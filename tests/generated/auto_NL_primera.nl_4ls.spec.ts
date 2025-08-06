import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_primera.nl_4ls', ['https://www.primera.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
