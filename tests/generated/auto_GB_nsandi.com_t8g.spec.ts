import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nsandi.com_t8g', ['https://www.nsandi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
