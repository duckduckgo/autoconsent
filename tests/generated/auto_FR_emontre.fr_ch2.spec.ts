import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emontre.fr_ch2', ['https://emontre.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
