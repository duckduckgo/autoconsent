import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fresha.com_it5', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
