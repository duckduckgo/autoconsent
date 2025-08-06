import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_perfactive.fr_elg', ['https://perfactive.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
