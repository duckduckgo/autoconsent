import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vrhump.com_467', ['https://www.vrhump.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
