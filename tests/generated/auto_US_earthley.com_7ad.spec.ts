import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_earthley.com_7ad', ['https://earthley.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
