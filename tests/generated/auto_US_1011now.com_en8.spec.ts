import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_1011now.com_en8', ['https://www.1011now.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
