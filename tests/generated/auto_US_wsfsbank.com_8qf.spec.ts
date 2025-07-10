import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wsfsbank.com_8qf', ['https://www.wsfsbank.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
