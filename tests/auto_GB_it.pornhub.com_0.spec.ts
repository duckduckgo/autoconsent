import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_it.pornhub.com_0', ['https://it.pornhub.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
