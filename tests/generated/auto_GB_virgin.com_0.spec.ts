import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virgin.com_0', ['https://www.virgin.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
