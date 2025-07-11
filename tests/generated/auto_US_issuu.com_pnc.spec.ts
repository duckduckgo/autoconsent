import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_issuu.com_pnc', ['https://issuu.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
