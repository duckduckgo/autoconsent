import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_complex.com_z45', ['https://www.complex.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
