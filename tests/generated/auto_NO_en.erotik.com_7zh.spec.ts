import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.erotik.com_7zh', ['https://en.erotik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
