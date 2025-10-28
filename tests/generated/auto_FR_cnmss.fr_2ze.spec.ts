import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnmss.fr_2ze', ['https://www.cnmss.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
