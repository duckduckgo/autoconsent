import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mandg.com_yfh', ['https://www.mandg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
