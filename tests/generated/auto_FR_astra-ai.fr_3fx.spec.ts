import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_astra-ai.fr_3fx', ['https://astra-ai.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
