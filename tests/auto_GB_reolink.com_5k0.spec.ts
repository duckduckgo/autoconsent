import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_reolink.com_5k0', ['https://reolink.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
