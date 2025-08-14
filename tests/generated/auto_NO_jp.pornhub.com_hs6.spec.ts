import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jp.pornhub.com_hs6', ['https://jp.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
