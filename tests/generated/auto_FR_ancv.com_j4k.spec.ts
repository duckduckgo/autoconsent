import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ancv.com_j4k', ['https://www.ancv.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
