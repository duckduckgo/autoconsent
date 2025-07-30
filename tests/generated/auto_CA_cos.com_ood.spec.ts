import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cos.com_ood', ['https://www.cos.com/index.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
