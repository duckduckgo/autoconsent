import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cytech.cyu.fr_7l8', ['https://cytech.cyu.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
