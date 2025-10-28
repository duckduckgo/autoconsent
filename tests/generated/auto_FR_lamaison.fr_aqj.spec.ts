import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamaison.fr_aqj', ['https://www.lamaison.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
