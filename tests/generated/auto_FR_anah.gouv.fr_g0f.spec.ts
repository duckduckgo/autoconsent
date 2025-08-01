import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anah.gouv.fr_g0f', ['https://www.anah.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
