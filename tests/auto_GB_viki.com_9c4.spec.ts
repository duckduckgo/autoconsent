import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_viki.com_9c4', ['https://www.viki.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
