import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_klesia.fr_ext', ['https://www.klesia.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
