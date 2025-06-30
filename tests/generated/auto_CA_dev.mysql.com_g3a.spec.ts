import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dev.mysql.com_g3a', ['https://dev.mysql.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
