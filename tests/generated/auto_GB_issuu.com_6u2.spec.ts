import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_issuu.com_6u2', ['https://issuu.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
