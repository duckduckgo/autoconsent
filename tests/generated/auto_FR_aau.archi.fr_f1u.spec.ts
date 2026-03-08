import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aau.archi.fr_f1u', ['https://aau.archi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
