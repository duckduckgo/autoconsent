import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_spirit.com_9rj', ['https://www.spirit.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
