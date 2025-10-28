import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_distrokid.com_jip', ['https://distrokid.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
