import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_home.bargains_mdb', ['https://home.bargains/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
