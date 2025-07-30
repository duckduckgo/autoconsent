import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stereonet.com_p44', ['https://stereonet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
