import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_elitespama.com_0om', ['https://elitespama.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
