import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dmarket.com_udn', ['https://dmarket.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
