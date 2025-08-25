import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_assem.nl_g6v', ['https://www.assem.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
