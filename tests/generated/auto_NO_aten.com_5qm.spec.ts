import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aten.com_5qm', ['https://www.aten.com/eu/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
