import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_axa.fr_5f5', ['https://www.axa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
