import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.kef.com_wx6', ['https://uk.kef.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
