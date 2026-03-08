import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_3dmatsusa.com_aia', ['https://3dmatsusa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
