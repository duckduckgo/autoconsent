import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_filbleu.fr_nm8', ['https://www.filbleu.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
