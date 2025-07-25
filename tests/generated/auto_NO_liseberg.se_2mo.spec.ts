import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_liseberg.se_2mo', ['https://www.liseberg.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
