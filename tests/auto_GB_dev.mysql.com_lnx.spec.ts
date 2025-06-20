import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_dev.mysql.com_lnx', ['https://dev.mysql.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
