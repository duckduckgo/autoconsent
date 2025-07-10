import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fool.com_ul0', ['https://www.fool.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
