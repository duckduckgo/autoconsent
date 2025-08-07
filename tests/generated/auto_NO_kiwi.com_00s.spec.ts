import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kiwi.com_00s', ['https://www.kiwi.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
