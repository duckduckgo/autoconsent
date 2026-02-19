import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leminor.fr_i84', ['https://leminor.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
