import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_no.co_0', ['https://no.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
