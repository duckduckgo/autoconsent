import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ancv.com_fiq', ['https://www.ancv.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
