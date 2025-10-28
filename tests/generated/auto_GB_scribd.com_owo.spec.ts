import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scribd.com_owo', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
