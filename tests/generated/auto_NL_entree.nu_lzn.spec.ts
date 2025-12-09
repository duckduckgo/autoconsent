import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_entree.nu_lzn', ['https://www.entree.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
