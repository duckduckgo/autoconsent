import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_soprema.fr_sdn', ['https://www.soprema.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
