import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fcnantes.com_qwy', ['https://www.fcnantes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
