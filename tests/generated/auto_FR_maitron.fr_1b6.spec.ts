import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maitron.fr_1b6', ['https://maitron.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
