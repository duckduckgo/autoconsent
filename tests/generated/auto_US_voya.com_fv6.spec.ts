import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_voya.com_fv6', ['https://www.voya.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
