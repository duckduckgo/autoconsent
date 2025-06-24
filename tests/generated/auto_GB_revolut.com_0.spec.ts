import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_revolut.com_0', ['https://www.revolut.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
