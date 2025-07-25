import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autotex.fr_z0c', ['https://www.autotex.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
