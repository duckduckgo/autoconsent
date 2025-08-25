import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zacks.com_jra', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
