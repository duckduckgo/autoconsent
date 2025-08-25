import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_infomalade.fr_d1i', ['https://infomalade.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
