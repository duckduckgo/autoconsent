import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reolink.com_tw6', ['https://reolink.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
