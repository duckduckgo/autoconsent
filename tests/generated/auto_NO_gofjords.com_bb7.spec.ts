import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gofjords.com_bb7', ['https://gofjords.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
