import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mycharisma.com_u6r', ['https://mycharisma.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
