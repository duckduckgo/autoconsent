import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ubs.com_eo7', ['https://www.ubs.com/us/en.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
