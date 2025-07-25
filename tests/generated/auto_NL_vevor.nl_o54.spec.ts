import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vevor.nl_o54', ['https://www.vevor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
