import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hyrox.com_l6j', ['https://hyrox.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
