import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rexbo.fr_ypn', ['https://www.rexbo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
