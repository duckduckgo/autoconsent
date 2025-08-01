import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camif.fr_g9z', ['https://www.camif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
