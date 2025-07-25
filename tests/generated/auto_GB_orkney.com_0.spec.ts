import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_orkney.com_0', ['https://www.orkney.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
