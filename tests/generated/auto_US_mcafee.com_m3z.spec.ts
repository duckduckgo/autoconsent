import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mcafee.com_m3z', ['https://www.mcafee.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
