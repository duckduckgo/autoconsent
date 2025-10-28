import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_norrona.com_cd1', ['https://www.norrona.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
