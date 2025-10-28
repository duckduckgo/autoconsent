import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_usinages.com_dor', ['https://www.usinages.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
