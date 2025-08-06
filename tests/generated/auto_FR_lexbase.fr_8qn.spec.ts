import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lexbase.fr_8qn', ['https://www.lexbase.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
