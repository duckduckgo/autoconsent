import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sfr.fr_wkb', ['https://www.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
