import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ademe.fr_bvs', ['https://www.ademe.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
