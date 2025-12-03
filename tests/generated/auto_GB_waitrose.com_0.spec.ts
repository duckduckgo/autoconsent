import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_waitrose.com_0', ['https://www.waitrose.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
