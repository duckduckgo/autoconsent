import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_equinoxal.fr_uti', ['https://equinoxal.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
