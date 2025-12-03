import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_wikiloc.com_hm1', ['https://www.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
