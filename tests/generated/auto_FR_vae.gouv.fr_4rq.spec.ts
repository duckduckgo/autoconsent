import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vae.gouv.fr_4rq', ['https://vae.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
