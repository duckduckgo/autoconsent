import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bsxl.nl_o1m', ['https://bsxl.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
