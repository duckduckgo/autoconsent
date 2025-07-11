import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_youfibre.com_2o1', ['https://www.youfibre.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
