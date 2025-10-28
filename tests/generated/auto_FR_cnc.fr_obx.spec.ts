import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnc.fr_obx', ['https://www.cnc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
