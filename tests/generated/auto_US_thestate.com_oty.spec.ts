import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thestate.com_oty', ['https://www.thestate.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
