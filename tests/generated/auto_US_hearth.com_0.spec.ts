import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_hearth.com_0', ['https://www.hearth.com/talk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
