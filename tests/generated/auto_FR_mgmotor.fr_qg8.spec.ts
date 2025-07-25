import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mgmotor.fr_qg8', ['https://www.mgmotor.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
