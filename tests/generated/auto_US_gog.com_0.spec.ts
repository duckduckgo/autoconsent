import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gog.com_0', ['https://www.gog.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
