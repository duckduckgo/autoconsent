import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_redgifs.com_0', ['https://www.redgifs.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
