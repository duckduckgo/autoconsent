import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_wesco.fr_oxb', ['https://www.wesco.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
