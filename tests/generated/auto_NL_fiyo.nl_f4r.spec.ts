import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiyo.nl_f4r', ['https://www.fiyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
