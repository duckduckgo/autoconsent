import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vevor.nl_xj4', ['https://www.vevor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
