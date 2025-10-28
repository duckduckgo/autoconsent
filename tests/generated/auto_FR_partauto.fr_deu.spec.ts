import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_partauto.fr_deu', ['https://www.partauto.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
