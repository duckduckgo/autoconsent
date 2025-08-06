import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camif.fr_m2h', ['https://www.camif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
