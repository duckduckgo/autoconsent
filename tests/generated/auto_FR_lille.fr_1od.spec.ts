import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lille.fr_1od', ['https://www.lille.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
