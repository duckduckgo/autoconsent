import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_soprema.fr_3zp', ['https://www.soprema.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
