import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jechange.fr_wgy', ['https://www.jechange.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
