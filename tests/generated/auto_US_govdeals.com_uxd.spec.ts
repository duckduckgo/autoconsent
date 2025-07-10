import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_govdeals.com_uxd', ['https://www.govdeals.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
