import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalmail.com_0', ['https://www.royalmail.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
