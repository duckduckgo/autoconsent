import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gulfnews.com_822', ['https://gulfnews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
