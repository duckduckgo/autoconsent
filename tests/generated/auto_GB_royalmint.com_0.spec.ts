import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalmint.com_0', ['https://www.royalmint.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
