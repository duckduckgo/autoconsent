import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unicaen.fr_mjj', ['https://www.unicaen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
