import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_zoosk.com_dca', ['https://www.zoosk.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
