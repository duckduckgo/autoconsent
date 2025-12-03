import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oney.fr_p15', ['https://www.oney.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
