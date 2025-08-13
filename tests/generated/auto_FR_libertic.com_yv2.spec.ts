import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_libertic.com_yv2', ['https://www.libertic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
