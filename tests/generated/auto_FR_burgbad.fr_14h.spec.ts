import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_burgbad.fr_14h', ['https://burgbad.fr/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
