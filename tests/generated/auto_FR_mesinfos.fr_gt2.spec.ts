import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mesinfos.fr_gt2', ['https://mesinfos.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
