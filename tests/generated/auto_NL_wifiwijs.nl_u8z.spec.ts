import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wifiwijs.nl_u8z', ['https://www.wifiwijs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
