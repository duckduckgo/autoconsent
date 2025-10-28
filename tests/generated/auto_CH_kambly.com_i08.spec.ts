import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kambly.com_i08', ['https://kambly.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
