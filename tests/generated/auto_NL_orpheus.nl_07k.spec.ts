import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_orpheus.nl_07k', ['https://www.orpheus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
