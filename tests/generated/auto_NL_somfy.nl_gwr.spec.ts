import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_somfy.nl_gwr', ['https://www.somfy.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
