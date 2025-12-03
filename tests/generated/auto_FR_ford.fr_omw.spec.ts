import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ford.fr_omw', ['https://www.ford.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
