import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nsandi.com_dg5', ['https://www.nsandi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
