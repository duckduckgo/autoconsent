import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dokkandb.com_yyu', ['https://dokkandb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
