import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_3ds.com_v59', ['https://www.3ds.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
