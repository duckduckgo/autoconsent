import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dev.mysql.com_2jt', ['https://dev.mysql.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
