import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_avis.fr_oa1', ['https://www.avis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
