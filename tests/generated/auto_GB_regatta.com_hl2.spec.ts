import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_regatta.com_hl2', ['https://www.regatta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
