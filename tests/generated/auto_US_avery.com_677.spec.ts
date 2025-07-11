import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_avery.com_677', ['https://www.avery.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
