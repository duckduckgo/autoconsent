import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cz.pornhub.com_nsl', ['https://cz.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
