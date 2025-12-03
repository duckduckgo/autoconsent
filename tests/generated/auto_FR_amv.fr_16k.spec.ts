import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amv.fr_16k', ['https://www.amv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
