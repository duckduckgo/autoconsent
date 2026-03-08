import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_firestation.nl_13p', ['https://firestation.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
