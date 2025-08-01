import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_monzo.com_0', ['https://monzo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
