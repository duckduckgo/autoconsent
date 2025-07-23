import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fresha.com_w3l', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
