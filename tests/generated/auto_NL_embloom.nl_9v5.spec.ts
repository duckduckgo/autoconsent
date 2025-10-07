import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_embloom.nl_9v5', ['https://www.embloom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
