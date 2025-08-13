import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dickblick.com_0', ['https://www.dickblick.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
