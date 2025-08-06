import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.somfy.fr_zff', ['https://forum.somfy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
