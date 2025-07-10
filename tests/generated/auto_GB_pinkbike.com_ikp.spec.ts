import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pinkbike.com_ikp', ['https://www.pinkbike.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
