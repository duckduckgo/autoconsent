import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_capcut.com_0', ['https://www.capcut.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
