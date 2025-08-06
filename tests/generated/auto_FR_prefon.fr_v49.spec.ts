import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prefon.fr_v49', ['https://www.prefon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
