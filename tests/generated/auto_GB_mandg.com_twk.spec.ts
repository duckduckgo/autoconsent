import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mandg.com_twk', ['https://www.mandg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
