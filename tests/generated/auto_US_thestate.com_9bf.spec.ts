import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thestate.com_9bf', ['https://www.thestate.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
