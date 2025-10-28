import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tcl.fr_lle', ['https://www.tcl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
