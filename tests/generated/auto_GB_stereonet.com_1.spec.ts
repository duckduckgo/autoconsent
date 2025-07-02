import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stereonet.com_1', ['https://stereonet.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
