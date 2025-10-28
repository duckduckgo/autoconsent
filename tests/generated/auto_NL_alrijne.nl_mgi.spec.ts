import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alrijne.nl_mgi', ['https://www.alrijne.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
