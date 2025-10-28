import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_scribd.com_ksz', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
