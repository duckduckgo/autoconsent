import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_listverse.com_5l3', ['https://listverse.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
