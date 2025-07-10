import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amfam.com_frd', ['https://www.amfam.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
