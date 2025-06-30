import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_money.tmx.com_l6e', ['https://money.tmx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
