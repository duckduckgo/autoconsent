import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_budmother.com_ati', ['https://budmother.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
