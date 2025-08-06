import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_becquet.fr_3bo', ['https://www.becquet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
