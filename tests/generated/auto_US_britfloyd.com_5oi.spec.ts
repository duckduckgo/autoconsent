import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_britfloyd.com_5oi', ['https://britfloyd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
