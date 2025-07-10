import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_youfibre.com_wlr', ['https://www.youfibre.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
