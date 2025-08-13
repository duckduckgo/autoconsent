import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jow.fr_bwl', ['https://jow.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
