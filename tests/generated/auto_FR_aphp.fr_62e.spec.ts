import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aphp.fr_62e', ['https://www.aphp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
