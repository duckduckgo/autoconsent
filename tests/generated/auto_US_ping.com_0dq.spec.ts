import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ping.com_0dq', ['https://ping.com/en-us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
