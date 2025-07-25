import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naturitas.fr_xsh', ['https://www.naturitas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
