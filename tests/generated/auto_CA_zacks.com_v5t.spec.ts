import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zacks.com_v5t', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
