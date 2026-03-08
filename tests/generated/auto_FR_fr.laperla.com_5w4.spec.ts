import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.laperla.com_5w4', ['https://fr.laperla.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
