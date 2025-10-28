import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mgevs.com_a2b', ['https://www.mgevs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
