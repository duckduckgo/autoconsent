import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oakley.com_1', ['https://www.oakley.com/en-gb'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
