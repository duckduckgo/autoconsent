import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livefoot.fr_0lr', ['https://www.livefoot.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
