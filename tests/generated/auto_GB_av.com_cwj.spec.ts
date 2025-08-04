import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_av.com_cwj', ['https://www.av.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
