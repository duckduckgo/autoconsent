import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_login.ionos.fr_7p0', ['https://login.ionos.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
