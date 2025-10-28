import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_runnea.fr_7gd', ['https://www.runnea.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
