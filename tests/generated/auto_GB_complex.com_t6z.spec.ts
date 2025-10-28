import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_complex.com_t6z', ['https://www.complex.com/uk'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
