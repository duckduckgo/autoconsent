import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_riverside.com_t3p', ['https://riverside.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
