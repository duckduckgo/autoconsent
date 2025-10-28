import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iphon.fr_4cf', ['https://www.iphon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
