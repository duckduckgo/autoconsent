import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_quinyx.com_y3j', ['https://www.quinyx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
