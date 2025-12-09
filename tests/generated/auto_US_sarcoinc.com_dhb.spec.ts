import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sarcoinc.com_dhb', ['https://www.sarcoinc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
