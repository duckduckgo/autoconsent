import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aefinfo.fr_6r7', ['https://www.aefinfo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
