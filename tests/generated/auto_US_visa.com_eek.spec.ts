import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_visa.com_eek', ['https://www.visa.com/en-us'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
