import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_capriottis.com_oih', ['https://capriottis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
