import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vanupied.com_do2', ['https://www.vanupied.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
