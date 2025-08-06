import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_betuwebomen.nl_i4p', ['https://betuwebomen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
