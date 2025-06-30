import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timeout.com_nem', ['https://www.timeout.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
