import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beekman.nl_f9e', ['https://www.beekman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
