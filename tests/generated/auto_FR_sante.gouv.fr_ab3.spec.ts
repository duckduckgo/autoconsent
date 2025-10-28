import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sante.gouv.fr_ab3', ['https://sante.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
