import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_variety.com_vx0', ['https://variety.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
