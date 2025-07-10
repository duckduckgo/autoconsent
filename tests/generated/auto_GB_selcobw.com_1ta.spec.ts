import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_selcobw.com_1ta', ['https://www.selcobw.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
