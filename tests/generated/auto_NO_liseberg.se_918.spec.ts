import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_liseberg.se_918', ['https://www.liseberg.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
