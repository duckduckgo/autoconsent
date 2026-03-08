import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_elliemd.com_o0d', ['https://elliemd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
