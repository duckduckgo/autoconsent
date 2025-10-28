import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arcep.fr_oov', ['https://www.arcep.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
