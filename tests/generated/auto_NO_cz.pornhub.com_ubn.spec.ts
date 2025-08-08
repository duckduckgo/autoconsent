import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cz.pornhub.com_ubn', ['https://cz.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
