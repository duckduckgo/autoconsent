import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riverside.fm_0', ['https://riverside.fm/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
