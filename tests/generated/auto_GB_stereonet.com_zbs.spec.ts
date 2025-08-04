import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stereonet.com_zbs', ['https://stereonet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
