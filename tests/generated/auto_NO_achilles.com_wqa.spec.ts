import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_achilles.com_wqa', ['https://www.achilles.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
