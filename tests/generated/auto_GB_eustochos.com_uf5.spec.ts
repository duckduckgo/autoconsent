import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eustochos.com_uf5', ['https://eustochos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
