import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cos.com_rcs', ['https://www.cos.com/index.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
