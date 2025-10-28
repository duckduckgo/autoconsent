import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dvdfr.com_3zh', ['https://www.dvdfr.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
