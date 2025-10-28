import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_groupe3f.fr_pp0', ['https://www.groupe3f.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
