import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fe2i.cyu.fr_m9v', ['https://fe2i.cyu.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
