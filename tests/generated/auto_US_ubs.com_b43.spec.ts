import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ubs.com_b43', ['https://www.ubs.com/us/en.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
