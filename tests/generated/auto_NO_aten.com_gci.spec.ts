import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aten.com_gci', ['https://www.aten.com/eu/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
