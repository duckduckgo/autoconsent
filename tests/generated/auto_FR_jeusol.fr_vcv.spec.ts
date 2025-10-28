import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeusol.fr_vcv', ['https://www.jeusol.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
