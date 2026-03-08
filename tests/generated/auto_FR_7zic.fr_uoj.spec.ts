import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_7zic.fr_uoj', ['https://7zic.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
