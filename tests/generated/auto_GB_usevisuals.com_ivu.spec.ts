import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_usevisuals.com_ivu', ['https://usevisuals.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
