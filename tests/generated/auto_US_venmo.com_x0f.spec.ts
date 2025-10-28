import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_venmo.com_x0f', ['https://venmo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
