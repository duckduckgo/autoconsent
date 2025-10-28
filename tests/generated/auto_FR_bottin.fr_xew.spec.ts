import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bottin.fr_xew', ['https://www.bottin.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
