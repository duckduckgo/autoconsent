import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_honehealth.com_4k2', ['https://honehealth.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
