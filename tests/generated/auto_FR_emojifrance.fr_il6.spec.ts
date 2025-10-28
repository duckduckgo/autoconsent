import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emojifrance.fr_il6', ['https://emojifrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
