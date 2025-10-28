import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_esante.gouv.fr_muf', ['https://esante.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
