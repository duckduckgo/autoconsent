import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kick.com_0', ['https://kick.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
