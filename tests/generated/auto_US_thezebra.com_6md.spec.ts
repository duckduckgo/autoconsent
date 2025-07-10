import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thezebra.com_6md', ['https://www.thezebra.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
