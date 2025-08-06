import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amv.fr_y8r', ['https://www.amv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
