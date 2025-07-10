import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rubylane.com_b0i', ['https://www.rubylane.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
