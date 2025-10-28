import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arcom.fr_s1l', ['https://www.arcom.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
