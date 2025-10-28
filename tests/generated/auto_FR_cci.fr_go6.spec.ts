import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cci.fr_go6', ['https://www.cci.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
