import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tel.fr_fpz', ['https://www.tel.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
