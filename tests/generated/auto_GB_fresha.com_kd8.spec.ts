import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fresha.com_kd8', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
