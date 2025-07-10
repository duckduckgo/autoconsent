import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fanvue.com_zd5', ['https://www.fanvue.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
