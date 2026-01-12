import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_greenpan.us_cko', ['https://www.greenpan.us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
