import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rexbo.fr_4u6', ['https://www.rexbo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
