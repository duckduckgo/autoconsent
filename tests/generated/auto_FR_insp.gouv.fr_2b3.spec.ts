import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_insp.gouv.fr_2b3', ['https://www.insp.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
