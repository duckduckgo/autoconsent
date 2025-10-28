import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_inrap.fr_xeh', ['https://www.inrap.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
