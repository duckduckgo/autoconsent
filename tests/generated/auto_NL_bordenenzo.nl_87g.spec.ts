import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bordenenzo.nl_87g', ['https://bordenenzo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
