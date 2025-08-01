import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_libertic.com_oiw', ['https://www.libertic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
