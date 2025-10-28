import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_consomac.fr_3k2', ['https://consomac.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
