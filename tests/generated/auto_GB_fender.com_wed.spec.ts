import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fender.com_wed', ['https://uk.fender.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
