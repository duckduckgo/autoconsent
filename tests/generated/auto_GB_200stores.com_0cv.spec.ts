import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_200stores.com_0cv', ['https://200stores.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
