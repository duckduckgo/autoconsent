import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amare.nl_fme', ['https://www.amare.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
