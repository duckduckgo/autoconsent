import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amare.nl_f2w', ['https://www.amare.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
