import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_pl.pornhub.com_0', ['https://pl.pornhub.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
