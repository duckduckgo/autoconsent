import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wsfsbank.com_yr0', ['https://www.wsfsbank.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
