import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cartosig.fr_m22', ['https://cartosig.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
