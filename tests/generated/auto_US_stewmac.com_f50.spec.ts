import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_stewmac.com_f50', ['https://www.stewmac.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
