import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scribd.com_7vv', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
