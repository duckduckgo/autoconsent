import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tapsuk.com_igv', ['https://www.tapsuk.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
