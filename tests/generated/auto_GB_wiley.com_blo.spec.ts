import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wiley.com_blo', ['https://www.wiley.com/en-gb/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
