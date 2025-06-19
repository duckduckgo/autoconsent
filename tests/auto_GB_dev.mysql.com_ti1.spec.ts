import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_dev.mysql.com_ti1', ['https://dev.mysql.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
