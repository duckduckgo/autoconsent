import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vrbangers.com_e1x', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
