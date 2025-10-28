import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ncoi.nl_nf4', ['https://www.ncoi.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
