import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wcax.com_4ca', ['https://www.wcax.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
