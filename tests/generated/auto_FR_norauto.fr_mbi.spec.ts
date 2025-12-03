import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_norauto.fr_mbi', ['https://www.norauto.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
