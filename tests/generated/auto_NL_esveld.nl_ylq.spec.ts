import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_esveld.nl_ylq', ['https://esveld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
