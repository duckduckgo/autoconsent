import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_complex.com_0t7', ['https://www.complex.com/uk'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
