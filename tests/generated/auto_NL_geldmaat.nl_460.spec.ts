import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_geldmaat.nl_460', ['https://www.geldmaat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
