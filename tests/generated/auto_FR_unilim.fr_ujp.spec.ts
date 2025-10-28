import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unilim.fr_ujp', ['https://www.unilim.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
