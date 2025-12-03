import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rubylane.com_g5g', ['https://www.rubylane.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
