import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_192.com_0', ['https://www.192.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
