import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nordpass.com_sgv', ['https://nordpass.com/b/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
