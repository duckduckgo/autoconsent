import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gemo.fr_r6m', ['https://www.gemo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
