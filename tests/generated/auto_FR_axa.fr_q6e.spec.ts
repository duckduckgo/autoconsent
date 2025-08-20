import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_axa.fr_q6e', ['https://www.axa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
