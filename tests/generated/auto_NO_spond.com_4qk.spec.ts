import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_spond.com_4qk', ['https://www.spond.com/no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
