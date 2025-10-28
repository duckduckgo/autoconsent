import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hex-rays.com_ava', ['https://hex-rays.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
