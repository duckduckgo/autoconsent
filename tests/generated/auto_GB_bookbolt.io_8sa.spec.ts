import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bookbolt.io_8sa', ['https://bookbolt.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
