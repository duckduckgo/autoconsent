import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lanekassen.no_p5i', ['https://lanekassen.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
