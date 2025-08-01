import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_3ds.com_mrp', ['https://www.3ds.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
