import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoexpo.fr_p65', ['https://autoexpo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
