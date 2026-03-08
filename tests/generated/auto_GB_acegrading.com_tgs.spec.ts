import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_acegrading.com_tgs', ['https://acegrading.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
