import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_betway.com_8oz', ['https://betway.com/en-gb/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
