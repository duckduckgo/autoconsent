import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anah.gouv.fr_v3y', ['https://www.anah.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
