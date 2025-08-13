import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_freemans.com_0', ['https://www.freemans.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
