import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_loake.com_2ot', ['https://www.loake.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
