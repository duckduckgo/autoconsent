import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dmarket.com_i11', ['https://dmarket.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
