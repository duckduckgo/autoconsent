import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fanvue.com_qe4', ['https://www.fanvue.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
