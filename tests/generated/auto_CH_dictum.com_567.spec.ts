import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dictum.com_567', ['https://www.dictum.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
