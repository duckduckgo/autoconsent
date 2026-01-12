import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ollies.com_d4c', ['https://www.ollies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
