import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oney.fr_21v', ['https://www.oney.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
