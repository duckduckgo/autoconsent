import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_enedis.fr_gku', ['https://www.enedis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
