import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_complex.com_w51', ['https://www.complex.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
