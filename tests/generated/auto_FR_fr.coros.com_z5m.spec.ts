import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.coros.com_z5m', ['https://fr.coros.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
