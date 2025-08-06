import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bregje.nl_lx2', ['https://bregje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
