import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rexel.fr_cop', ['https://www.rexel.fr/frx/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
