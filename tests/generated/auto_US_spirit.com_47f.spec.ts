import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_spirit.com_47f', ['https://www.spirit.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
