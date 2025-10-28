import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vorlagen.com_t09', ['https://vorlagen.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
