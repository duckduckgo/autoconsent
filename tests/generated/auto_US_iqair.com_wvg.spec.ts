import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_iqair.com_wvg', ['https://www.iqair.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
