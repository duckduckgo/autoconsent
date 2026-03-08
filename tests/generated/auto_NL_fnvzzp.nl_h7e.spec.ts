import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fnvzzp.nl_h7e', ['https://fnvzzp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
