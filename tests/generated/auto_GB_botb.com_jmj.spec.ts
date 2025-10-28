import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_botb.com_jmj', ['https://www.botb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
