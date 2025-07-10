import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_avery.com_sc7', ['https://www.avery.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
