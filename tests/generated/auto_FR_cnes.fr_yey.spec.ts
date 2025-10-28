import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnes.fr_yey', ['https://cnes.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
