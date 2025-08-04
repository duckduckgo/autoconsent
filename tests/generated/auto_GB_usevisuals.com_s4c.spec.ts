import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_usevisuals.com_s4c', ['https://usevisuals.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
