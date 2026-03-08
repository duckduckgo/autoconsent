import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dyme.app_2zy', ['https://dyme.app/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
