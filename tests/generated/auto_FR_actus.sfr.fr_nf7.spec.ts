import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actus.sfr.fr_nf7', ['https://actus.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
