import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lpga.com_bhh', ['https://www.lpga.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
