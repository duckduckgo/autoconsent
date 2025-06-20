import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_deezer.com_0', ['https://www.deezer.com/us/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
