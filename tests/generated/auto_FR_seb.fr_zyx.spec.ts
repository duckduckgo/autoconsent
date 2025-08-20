import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_seb.fr_zyx', ['https://www.seb.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
