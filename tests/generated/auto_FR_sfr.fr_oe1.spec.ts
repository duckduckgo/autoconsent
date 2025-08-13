import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sfr.fr_oe1', ['https://www.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
