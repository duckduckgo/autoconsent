import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_embloom.nl_m0i', ['https://www.embloom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
