import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mycharisma.com_0iy', ['https://mycharisma.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
