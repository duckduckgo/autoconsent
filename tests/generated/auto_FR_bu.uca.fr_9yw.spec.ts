import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.uca.fr_9yw', ['https://bu.uca.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
