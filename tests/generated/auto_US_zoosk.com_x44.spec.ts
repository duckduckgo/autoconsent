import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_zoosk.com_x44', ['https://www.zoosk.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
