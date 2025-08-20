import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lanekassen.no_vtt', ['https://lanekassen.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
