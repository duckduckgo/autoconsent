import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bipandgo.com_unf', ['https://www.bipandgo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
