import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_leaf.tv_qhn', ['https://www.leaf.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
