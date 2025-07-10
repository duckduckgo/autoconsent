import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_zumper.com_58p', ['https://www.zumper.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
