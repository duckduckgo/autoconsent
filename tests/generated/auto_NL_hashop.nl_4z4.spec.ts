import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hashop.nl_4z4', ['https://www.hashop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
