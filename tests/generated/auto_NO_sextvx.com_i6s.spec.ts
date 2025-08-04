import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sextvx.com_i6s', ['https://www.sextvx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
