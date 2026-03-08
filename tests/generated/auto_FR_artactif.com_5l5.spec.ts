import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_artactif.com_5l5', ['https://en.artactif.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
