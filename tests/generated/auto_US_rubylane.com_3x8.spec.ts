import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rubylane.com_3x8', ['https://www.rubylane.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
