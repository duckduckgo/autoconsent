import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lutinbazar.fr_9fw', ['https://lutinbazar.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
