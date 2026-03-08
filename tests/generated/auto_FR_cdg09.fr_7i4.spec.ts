import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdg09.fr_7i4', ['https://cdg09.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
