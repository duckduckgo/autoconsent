import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.worx.com_oj7', ['https://uk.worx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
