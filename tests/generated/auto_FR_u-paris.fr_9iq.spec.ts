import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_u-paris.fr_9iq', ['https://u-paris.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
