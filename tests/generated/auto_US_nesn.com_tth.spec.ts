import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nesn.com_tth', ['https://nesn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
