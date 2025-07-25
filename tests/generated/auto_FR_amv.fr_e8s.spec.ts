import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amv.fr_e8s', ['https://www.amv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
