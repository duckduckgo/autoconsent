import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ollies.com_o4o', ['https://www.ollies.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
