import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_peugeot.fr_4hv', ['https://www.peugeot.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
