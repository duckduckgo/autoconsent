import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_entree.nu_bdq', ['https://www.entree.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
