import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wfsb.com_7vg', ['https://www.wfsb.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
