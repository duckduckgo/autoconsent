import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_lustery.com_0', ['https://lustery.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
