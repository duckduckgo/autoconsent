import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_novaloca.com_0', ['https://www.novaloca.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
