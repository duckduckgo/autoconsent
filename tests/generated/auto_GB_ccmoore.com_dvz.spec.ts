import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ccmoore.com_dvz', ['https://ccmoore.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
