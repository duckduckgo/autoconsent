import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bluegreen.fr_gv0', ['https://bluegreen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
