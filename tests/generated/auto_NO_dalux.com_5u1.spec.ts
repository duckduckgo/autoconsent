import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dalux.com_5u1', ['https://www.dalux.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
