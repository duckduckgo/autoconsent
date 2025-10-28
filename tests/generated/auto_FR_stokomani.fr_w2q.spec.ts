import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stokomani.fr_w2q', ['https://www.stokomani.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
