import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_axa.fr_7l6', ['https://www.axa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
