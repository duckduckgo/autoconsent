import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tv.sfr.fr_5eo', ['https://tv.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
