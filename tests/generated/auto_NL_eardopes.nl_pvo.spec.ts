import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eardopes.nl_pvo', ['https://eardopes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
