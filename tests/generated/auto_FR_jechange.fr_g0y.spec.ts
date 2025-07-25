import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jechange.fr_g0y', ['https://www.jechange.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
