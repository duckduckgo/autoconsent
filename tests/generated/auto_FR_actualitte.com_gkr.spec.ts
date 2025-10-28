import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actualitte.com_gkr', ['https://actualitte.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
