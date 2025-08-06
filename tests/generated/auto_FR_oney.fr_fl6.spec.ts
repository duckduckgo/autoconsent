import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oney.fr_fl6', ['https://www.oney.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
