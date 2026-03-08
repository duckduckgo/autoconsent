import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baolondon.com_7py', ['https://baolondon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
