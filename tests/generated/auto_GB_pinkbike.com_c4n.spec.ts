import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pinkbike.com_c4n', ['https://www.pinkbike.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
