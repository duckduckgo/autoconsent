import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ants.gouv.fr_o3f', ['https://ants.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
