import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_driftshop.fr_6kq', ['https://www.driftshop.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
