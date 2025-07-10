import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lexus.com_68d', ['https://www.lexus.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
