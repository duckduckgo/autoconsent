import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bhv.fr_coj', ['https://www.bhv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
