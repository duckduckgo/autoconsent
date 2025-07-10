import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pelican.com_m00', ['https://www.pelican.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
