import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wired.com_cbe', ['https://www.wired.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
