import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anct.gouv.fr_7ic', ['https://anct.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
