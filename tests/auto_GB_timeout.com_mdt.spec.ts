import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_timeout.com_mdt', ['https://www.timeout.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
