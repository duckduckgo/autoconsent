import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cn.ca_mdw', ['https://www.cn.ca/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
