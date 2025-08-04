import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_usevisuals.com_u4a', ['https://usevisuals.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
