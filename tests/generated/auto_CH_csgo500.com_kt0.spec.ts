import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csgo500.com_kt0', ['https://csgo500.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
