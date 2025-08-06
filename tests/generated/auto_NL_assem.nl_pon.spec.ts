import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_assem.nl_pon', ['https://www.assem.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
