import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cam4.com_0', ['https://www.cam4.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
