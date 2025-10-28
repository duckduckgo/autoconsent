import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rebuy.fr_6ji', ['https://www.rebuy.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
