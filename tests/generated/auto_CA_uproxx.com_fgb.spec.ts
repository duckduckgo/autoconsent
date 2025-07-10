import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_uproxx.com_fgb', ['https://uproxx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
