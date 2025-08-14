import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bipandgo.com_ocw', ['https://www.bipandgo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
