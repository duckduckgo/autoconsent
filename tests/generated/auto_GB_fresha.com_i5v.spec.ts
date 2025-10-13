import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fresha.com_i5v', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
