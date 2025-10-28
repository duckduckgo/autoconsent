import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_synonymo.fr_q17', ['https://www.synonymo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
