import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_selcobw.com_7p1', ['https://www.selcobw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
