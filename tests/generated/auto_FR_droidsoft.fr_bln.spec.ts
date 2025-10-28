import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_droidsoft.fr_bln', ['https://droidsoft.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
