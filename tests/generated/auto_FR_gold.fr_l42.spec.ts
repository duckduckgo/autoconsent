import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gold.fr_l42', ['https://www.gold.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
