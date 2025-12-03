import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_it.youporn.com_1o9', ['https://it.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
