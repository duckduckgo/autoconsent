import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smugmug.com_5n7', ['https://www.smugmug.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
