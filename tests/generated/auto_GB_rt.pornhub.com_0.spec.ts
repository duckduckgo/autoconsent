import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rt.pornhub.com_0', ['https://rt.pornhub.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
