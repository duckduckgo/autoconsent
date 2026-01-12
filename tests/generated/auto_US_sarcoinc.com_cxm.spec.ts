import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sarcoinc.com_cxm', ['https://www.sarcoinc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
