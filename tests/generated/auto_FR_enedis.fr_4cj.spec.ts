import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_enedis.fr_4cj', ['https://www.enedis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
