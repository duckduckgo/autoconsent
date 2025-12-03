import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_snap.com_zh6', ['https://www.snap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
