import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_soprema.fr_xq8', ['https://www.soprema.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
