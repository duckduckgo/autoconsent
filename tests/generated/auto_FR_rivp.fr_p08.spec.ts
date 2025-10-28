import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rivp.fr_p08', ['https://www.rivp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
