import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_58facettes.fr_qft', ['https://58facettes.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
