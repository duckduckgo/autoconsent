import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lanekassen.no_fb1', ['https://lanekassen.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
