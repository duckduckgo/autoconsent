import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_al-in.fr_f71', ['https://al-in.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
