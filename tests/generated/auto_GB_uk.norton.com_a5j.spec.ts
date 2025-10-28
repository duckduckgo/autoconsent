import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.norton.com_a5j', ['https://uk.norton.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
