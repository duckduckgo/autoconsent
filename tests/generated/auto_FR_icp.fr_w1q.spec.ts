import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_icp.fr_w1q', ['https://www.icp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
