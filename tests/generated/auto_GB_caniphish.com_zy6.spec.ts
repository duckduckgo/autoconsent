import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caniphish.com_zy6', ['https://caniphish.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
