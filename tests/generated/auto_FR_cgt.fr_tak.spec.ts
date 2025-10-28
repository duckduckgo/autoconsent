import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cgt.fr_tak', ['https://www.cgt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
