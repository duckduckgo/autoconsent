import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_geldmaat.nl_3qy', ['https://www.geldmaat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
