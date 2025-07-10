import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nsandi.com_5md', ['https://www.nsandi.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
