import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_efile.com_r24', ['https://www.efile.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
