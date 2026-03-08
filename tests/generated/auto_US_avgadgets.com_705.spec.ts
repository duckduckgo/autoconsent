import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_avgadgets.com_705', ['https://avgadgets.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
