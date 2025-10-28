import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_madparis.fr_w7u', ['https://madparis.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
