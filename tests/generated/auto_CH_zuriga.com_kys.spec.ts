import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zuriga.com_kys', ['https://zuriga.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
