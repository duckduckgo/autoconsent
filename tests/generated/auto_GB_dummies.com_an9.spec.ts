import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dummies.com_an9', ['https://www.dummies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
