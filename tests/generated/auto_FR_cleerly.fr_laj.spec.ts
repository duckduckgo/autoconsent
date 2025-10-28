import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cleerly.fr_laj', ['https://cleerly.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
