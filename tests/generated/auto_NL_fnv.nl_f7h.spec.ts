import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fnv.nl_f7h', ['https://www.fnv.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
