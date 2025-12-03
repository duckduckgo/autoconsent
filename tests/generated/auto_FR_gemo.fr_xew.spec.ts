import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gemo.fr_xew', ['https://www.gemo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
