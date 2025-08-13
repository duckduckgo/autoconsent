import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_journaux.fr_ppo', ['https://www.journaux.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
