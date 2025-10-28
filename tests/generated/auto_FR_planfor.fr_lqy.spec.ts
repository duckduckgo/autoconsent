import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_planfor.fr_lqy', ['https://www.planfor.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
