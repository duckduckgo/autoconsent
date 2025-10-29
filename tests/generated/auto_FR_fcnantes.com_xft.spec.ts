import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fcnantes.com_xft', ['https://www.fcnantes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
