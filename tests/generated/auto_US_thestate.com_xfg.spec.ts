import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thestate.com_xfg', ['https://www.thestate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
