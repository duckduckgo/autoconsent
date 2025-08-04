import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pt.pornhub.com_f3a', ['https://pt.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
