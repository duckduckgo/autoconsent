import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lanekassen.no_3fb', ['https://lanekassen.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
