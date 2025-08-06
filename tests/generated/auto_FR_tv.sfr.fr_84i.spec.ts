import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tv.sfr.fr_84i', ['https://tv.sfr.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
