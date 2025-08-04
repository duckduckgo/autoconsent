import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cz.pornhub.com_lj8', ['https://cz.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
