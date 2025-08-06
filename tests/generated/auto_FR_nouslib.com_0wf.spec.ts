import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nouslib.com_0wf', ['https://www.nouslib.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
