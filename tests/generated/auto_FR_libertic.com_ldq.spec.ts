import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_libertic.com_ldq', ['https://www.libertic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
