import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_nl.pornhub.com_0', ['https://nl.pornhub.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
