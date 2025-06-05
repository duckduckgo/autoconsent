import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_wikifeet.com_0', ['https://wikifeet.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
