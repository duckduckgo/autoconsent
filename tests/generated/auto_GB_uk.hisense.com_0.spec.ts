import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.hisense.com_0', ['https://uk.hisense.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
