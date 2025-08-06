import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_proantic.com_wzo', ['https://www.proantic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
