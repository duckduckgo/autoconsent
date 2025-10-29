import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_karafun.fr_0z5', ['https://www.karafun.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
