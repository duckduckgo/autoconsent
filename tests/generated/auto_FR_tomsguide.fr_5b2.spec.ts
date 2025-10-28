import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tomsguide.fr_5b2', ['https://www.tomsguide.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
